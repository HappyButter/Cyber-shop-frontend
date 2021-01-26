import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesBar, AppBar, ProductGrid } from '../../components';
import { getPromoProducts } from 'state/products/productActions';
import { Middlepane } from '../../styles/Middlepane.css';

const Promo = () => {
    const dispatch = useDispatch();
    const { promoId } = useParams();
    
    useEffect( () => {
        dispatch(getPromoProducts(promoId));
    }, [dispatch, promoId])
 
    const promoProducts = useSelector(state => state.products.promoProducts);

    return (
        <>
            <AppBar></AppBar>
            <CategoriesBar></CategoriesBar>
            <Middlepane>
                <br/>
                <h1>Promo {promoId}</h1>
                <br/>
                <ProductGrid productsInfo={promoProducts}></ProductGrid>
            </Middlepane>
        </>
    );
};

export default Promo;
