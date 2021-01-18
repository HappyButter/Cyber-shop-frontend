import React from 'react';
import { Paragraph, Middlepane } from './home.css';
import { CategoriesBar, AppBar, AdsCarousel, Recommended } from '../../components';




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
                <br/><br/>
                <Recommended/>
            </Middlepane>
        </>
    );
};

export default Home;
