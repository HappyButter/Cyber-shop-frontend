import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProductsByCategoryId } from '../../state/products/productActions';
import { CategoriesBar, AppBar } from '../../components';


const Offer = () => {
    const dispatch = useDispatch();
    const { categoryId }= useParams();
    
    useEffect( () => {
        dispatch(getProductsByCategoryId(categoryId));
    },[dispatch, categoryId]);

    return (
        <>
            <AppBar></AppBar>
            <CategoriesBar></CategoriesBar>
            <br/>
            <h1>Offer {categoryId}</h1>
            <br/>
        </>
    );
};

export default Offer;
