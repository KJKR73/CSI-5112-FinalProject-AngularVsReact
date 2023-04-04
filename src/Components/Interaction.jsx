import "./../CSS/interaction.css";
import { useState } from "react";
import ScanQR from "./ScanQR";
import ShowQR from "./ShowQR";
import QRCode from "react-qr-code";

// this component should have both reading and producing QR

const Interaction = () => {
  const [startScan, setStartScan] = useState(false);
  const [displayQR, setDisplayQR] = useState(false);


  return (
    <div className="interaction flex flex-col items-center justify-center w-full font-sans">
      {!displayQR && <div className="p-4 m-2 bg-blue-100 cursor-pointer border-2 rounded-md shadow-md border-blue-300" onClick={() => { setStartScan(!startScan); }}>{!startScan ? "SCAN A FRIEND" : "SCANNING"}</div>}
      {!startScan && <div className="p-4 m-2 bg-green-300 cursor-pointer rounded-md border-2 border-green-400 shadow-md" onClick={() => { setDisplayQR(!displayQR); }}>SHOW QR CODE</div>}
      <ScanQR
        startScan={startScan}
        setStartScan={setStartScan}
      />
      <ShowQR
        displayQR={displayQR}
      />
    </div>
  );
};

export default Interaction;
