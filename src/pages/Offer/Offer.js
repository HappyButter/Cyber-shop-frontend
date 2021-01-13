import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../state/products/productActions';
import { CategoriesBar, AppBar } from '../../components';


const Offer = () => {
    const dispatch = useDispatch();
    const { categoryId }= useParams();
    
    return (
        <>
            <AppBar></AppBar>
            <CategoriesBar></CategoriesBar>
            <br/>
            <h1>Offer {categoryId}</h1>
            <button onClick={() => dispatch(getAllProducts())}>FETCH POSTS</button>
            <br/>
        </>
    );
};

export default Offer;
