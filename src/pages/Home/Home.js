import React from 'react';
import { useSelector } from 'react-redux'
import { Paragraph } from './home.css';
import { Middlepane } from '../../styles/Middlepane.css';
import { CategoriesBar, AppBar, AdsCarousel, ProductGrid } from '../../components';



const Home = () => {
    const recommendedProducts = useSelector(state => state.products.recommended);

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
                <Paragraph>Polecane</Paragraph>
                <ProductGrid productsInfo={recommendedProducts}/>
            </Middlepane>
        </>
    );
};

export default Home;
