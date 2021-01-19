import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesBar, AppBar } from '../../components';
import { getProductDetails } from 'state/products/productActions';
import { Middlepane, Paragraph } from './productDetails.css';


const ProductDetails = () => {
    const dispatch = useDispatch();
    const { productId }= useParams();

    useEffect( () => {
        dispatch(getProductDetails(productId));
    }, [dispatch, productId])

    const product = useSelector(status => status.products.productDetails);

    return(
        <>
            <AppBar></AppBar>
            <CategoriesBar></CategoriesBar>
            <Middlepane>
                <br/>
                <br/>
                <Paragraph>{product.name}</Paragraph>
                <br/><br/>
            </Middlepane> 
        </>
    )   
}

export default ProductDetails;