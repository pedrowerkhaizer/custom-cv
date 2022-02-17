import React, { useEffect } from 'react';
import { MeteorRainLoading } from 'react-loadingg';

const Container = () => {
    const [show, toggleShow] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            toggleShow(!show);
        }, 5000);
    }, [])

    return (
        <div hidden={show} style={{ backgroundColor: "#1A142E", width: "100vw", height: "100vh", position: "fixed", top: "0", left: "0", zIndex: "9999" }}>
            <MeteorRainLoading color="#953AED" /> </div>
    )
};


export default Container;