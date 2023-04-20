import { useState } from "react";
import QrReader from "react-qr-reader";
import { makeConnection } from "../Utils/api";
import { useApi } from '../Utils/hooks/useApi.js';


function ScanQR({ startScan, setStartScan }) {

    const [loadingScan, setLoadingScan] = useState(false);
    const [selected, setSelected] = useState("environment");
    const [data, submitData] = useApi(() => makeConnection(connectionData));

    let connectionData = '';

    const handleScan = async (scanData) => {
        setLoadingScan(true);
        console.log(`loaded data data`, scanData);
        connectionData = scanData;
        if (scanData && scanData !== "") {
            console.log(`loaded >>>`, scanData);
            submitData(scanData);
            setStartScan(false);
            setLoadingScan(false);
            // code for api call
            // setPrecScan(scanData);
        }
    };
    const handleError = (err) => {
        console.error(err);
        console.log(err)
    };
    return (
        <div>
            {startScan && (
                <div className="bg-blue-100 p-6 rounded-md border">
                    <select onChange={(e) => setSelected(e.target.value)}>
                        <option value={"environment"}>Back Camera</option>
                        <option value={"user"}>Front Camera</option>
                    </select>
                    <QrReader
                        facingMode={selected}
                        delay={1000}
                        onError={handleError}
                        onScan={handleScan}
                        // chooseDeviceId={()=>selected}
                        style={{ width: "300px" }}
                    />
                </div>
            )}
            {(loadingScan && startScan) && <p className="flex justify-center">Scanning data ..</p>}
            {/* {data !== "" && <p>{data}</p>} */}
        </div>
    )
}

export default ScanQR