import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CategoriesBar, AppBar } from '../../components';
import { getPromoProducts } from 'state/products/productActions';


const Promo = () => {
    const dispatch = useDispatch();
    const { promoId } = useParams();
    
    useEffect( () => {
        dispatch(getPromoProducts(promoId));
    }, [dispatch, promoId])

    return (
        <>
            <AppBar></AppBar>
            <CategoriesBar></CategoriesBar>
            <br/>
            <h1>Promo {promoId}</h1>
            <br/>
        </> 
    );
};

export default Promo;
