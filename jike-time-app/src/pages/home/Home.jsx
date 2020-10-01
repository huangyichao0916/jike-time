import React from 'react';
import {renderRoutes} from 'react-router-config';
import Footer from '@/pages/discover/footer/Footer';

const Home = props => {
    return (
        <>
            <Footer />
            {renderRoutes(props.route.routes)}
        </>
    )
}

export default Home;