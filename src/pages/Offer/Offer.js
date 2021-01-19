import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategoryId } from '../../state/products/productActions';
import { CategoriesBar, AppBar, ProductGrid } from '../../components';
import { Middlepane } from '../../styles/Middlepane.css';

const Offer = () => {
    const dispatch = useDispatch();
    const { categoryId } = useParams();
    
    useEffect( () => {
        dispatch(getProductsByCategoryId(categoryId));
    },[dispatch, categoryId]);

    
    const categoryProducts = useSelector(state => state.products.categoryProducts);

    return (
        <>
            <AppBar></AppBar>
            <CategoriesBar></CategoriesBar>
            <Middlepane>
                <br/>
                <h1>Offer {categoryId}</h1>
                <br/>
                <ProductGrid productsInfo={categoryProducts}></ProductGrid>
            </Middlepane>
        </>
    );
};

export default Offer;
