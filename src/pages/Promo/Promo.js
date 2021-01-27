import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesBar, AppBar, ProductGrid } from 'components';
import { getPromoProducts } from 'state/products/productActions';
import { Middlepane } from 'styles/Middlepane.css';

const Promo = () => {
    const dispatch = useDispatch();
    const { promoId } = useParams();

    useEffect( () => {
        dispatch(getPromoProducts(promoId));
    }, [dispatch, promoId])
 
    const promoProducts = useSelector(state => state.products.promoProducts);
    const promoList = useSelector(state => state.promos.promosList);
    const promo = promoList.filter(promo => promo.id === parseInt(promoId));

    const promoDetails = promo.map(promo => (
            <> 
                <h1>
                    {promo.title}
                </h1>
                <h3>
                    {promo.description}
                </h3>
                <h3>
                    {"ZNIŻKA NA WSZYSTKO: " + parseFloat(promo.discount * 100) + "%!"}
                </h3> 
            </> 
        ));

    return (
        <>
            <AppBar></AppBar>
            <CategoriesBar></CategoriesBar>
            <Middlepane>
                <hr/>
                <br/>
                {promoDetails}
                <br/>
                <hr/>
                <br/>
                <ProductGrid productsInfo={promoProducts}></ProductGrid>
            </Middlepane>
        </>
    );
};

export default Promo;
