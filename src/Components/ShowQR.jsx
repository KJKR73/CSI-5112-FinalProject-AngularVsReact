import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code';
import Checkbox from './checkbox';

function ShowQR({ displayQR }) {


    const [facebook, setFacebook] = React.useState(false);
    const [instagram, setInstagram] = React.useState(false);
    const [linkedin, setLinkedin] = React.useState(false);
    const [github, setGithub] = React.useState(false);
    let data_object = {
        'user_id': 12345,
        'facebook': facebook,
        'instagram': instagram,
        'linkedin': linkedin,
        'github': github,
    }

    // useEffect(() => {
    //     setQrValue(data_object)
    // }, [facebook, instagram, github, linkedin])

    const handleFacebook = () => {
        setFacebook(!facebook);
    };
    const handleInstagram = () => {
        setInstagram(!instagram);
    };
    const handleLinkedin = () => {
        setLinkedin(!linkedin);
    };
    const handleGithub = () => {
        setGithub(!github);
    };

    return (
        <div>
            {displayQR && (
                <div className='flex flex-col items-center p-5 font-serif font-thin bg-green-300 border rounded-md '>
                    <div className='text-lg'>What details do you want to share?</div>
                    <div className='flex flex-col items-start w-full px-3 py-2 my-2'>
                        <Checkbox
                            label="Facebook"
                            value={facebook}
                            onChange={handleFacebook}
                        />
                        <Checkbox
                            label="Instagram"
                            value={instagram}
                            onChange={handleInstagram}
                        />
                        <Checkbox
                            label="LinkedIn"
                            value={linkedin}
                            onChange={handleLinkedin}
                        />
                        <Checkbox
                            label="Github"
                            value={github}
                            onChange={handleGithub}
                        />
                    </div>
                    <div>
                        <QRCode value={JSON.stringify(data_object)} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowQR