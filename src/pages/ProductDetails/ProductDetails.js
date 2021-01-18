import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesBar, AppBar } from '../../components';
import { getProductDetails } from 'state/products/productActions';


const ProductDetails = () => {
    const dispatch = useDispatch();
    const { productId }= useParams();

    useEffect( () => {
        dispatch(getProductDetails(productId));
    }, [dispatch, productId])

    const product = useSelector(status => status.products.ProductDetails);
    console.log({product});

    return(
        <>
            <AppBar></AppBar>
            <CategoriesBar></CategoriesBar> 
        </>
    )   
}

export default ProductDetails;