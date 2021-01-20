import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesBar, AppBar, Comments } from '../../components';
import { getProductDetails } from 'state/products/productActions';
import { Middlepane, Paragraph } from './productDetails.css';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CategoryIcon from '@material-ui/icons/Category';
import WatchIcon from '@material-ui/icons/Watch';
import ComputerIcon from '@material-ui/icons/Computer';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const ProductDetails = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    console.log(productId);

    const getProductIcon = (category) => {
        switch (category) {
            case 1:{
                return  <PhoneAndroidIcon style={{ fontSize: 200 }}/>;
            }case 2:{
                return  <WatchIcon style={{ fontSize: 200 }}/>;
            }case 3:{
                return  <CategoryIcon style={{ fontSize: 200 }}/>;
            }case 4:{
                return  <ComputerIcon style={{ fontSize: 200 }}/>;
            }default: {
                return <CategoryIcon/>;
            }
        }
    } 

    useEffect( () => {
        dispatch(getProductDetails(productId));
    }, [dispatch, productId]);

    const product = useSelector(status => status.products.productDetails);

    return(
        <>
            <AppBar></AppBar>
            <CategoriesBar></CategoriesBar>

            <Middlepane>
                {getProductIcon(product.category_id)}
                <AddShoppingCartIcon style={{ color: "green" }}/>
                <br/>
                <br/>
                <Paragraph>{product.name}</Paragraph>
                <br/><br/>
                {product.promo_id 
                ? product.promo_price + " zł" 
                : product.price + " zł"}
                <br/><br/>
                <hr/>
                <div className="description">
                    <br/><br/>  
                        {product.description}
                    <br/><br/>
                </div>
                <hr/>
                <br/><br/>
                <span>komentarze:</span> 
                <br/><br/>
                <Comments productId={productId}/> 

            </Middlepane> 
        </>
    )   
}

export default ProductDetails;