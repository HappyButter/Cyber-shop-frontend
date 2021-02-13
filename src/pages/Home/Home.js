import React from 'react';
import { useSelector } from 'react-redux'
import { Paragraph } from './home.css';
import { MiddlepaneOffer } from 'styles/Middlepane.css';
import { AdsCarousel, ProductGrid } from 'components';



const Home = () => {
    const recommendedProducts = useSelector(state => state.products.recommended);

    return (
        <MiddlepaneOffer>
            <br/>
            <br/>
            <Paragraph>Welcome to CyberShop!</Paragraph>
            <br/>
            <br/>
            <AdsCarousel/>
            <br/><br/>
            <Paragraph>Polecane</Paragraph>
            <ProductGrid productsInfo={recommendedProducts}/>
        </MiddlepaneOffer>
    );
};

export default Home;
