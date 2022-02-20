import React, { useEffect } from 'react';
import { MeteorRainLoading } from 'react-loadingg';
import { LoadingContainer } from './loadingElement';

const Container = () => {
    const [show, toggleShow] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            toggleShow(!show);
        }, 5000);
    }, [])

    return (
        <LoadingContainer hidden={show}>
            <MeteorRainLoading color="#953AED" />
        </LoadingContainer>
    )
};

export default Container;