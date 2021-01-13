import React from 'react';
import { Paragraph, Middlepane } from './home.css';
import { CategoriesBar, AppBar, AdsCarousel } from '../../components';

const Home = () => {
    return (
        <>
            <AppBar></AppBar>
            <CategoriesBar></CategoriesBar>
            <Middlepane>
                <br/>
                <br/>
                <Paragraph>Welcome to CyberShop!</Paragraph>
                <br/>
                <br/>
                <AdsCarousel/>
            </Middlepane>
        </>
    );
};

export default Home;
