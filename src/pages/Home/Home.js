import React from 'react';
import { useSelector } from 'react-redux'
import { Paragraph } from './home.css';
import { MiddlepaneOffer } from 'styles/Middlepane.css';
import { AdsCarousel, ProductGrid } from 'components';
import { useSnackbar } from 'notistack';


const Home = () => {
    const recommendedProducts = useSelector(state => state.products.recommended);
    const { enqueueSnackbar } = useSnackbar();

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
            <ProductGrid 
                productsInfo={recommendedProducts} 
                enqueueSnackbar={enqueueSnackbar}
            />
        </MiddlepaneOffer>
    );
};

export default Home;
