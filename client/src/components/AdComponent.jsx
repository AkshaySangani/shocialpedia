import React, { useEffect  } from 'react';

const AdsComponent = () => {

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
        catch (e) {
        }
    },[]);

    return (
        <>
            <ins className="adsbygoogle"
                 style={{ display: "block" }}
                 data-ad-client="ca-pub-6597711809539661"
                 data-ad-slot='9247698777'
                 data-ad-format="auto"
                 data-full-width-responsive="true">
            </ins>
        </>
    );
};

export default AdsComponent;
