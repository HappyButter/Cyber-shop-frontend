import { useDispatch } from 'react-redux';
import { addProductToCart,
    reduceProductQuantityFromCart,
    removeProductFromCart } from '../../state/cart/cartActions';

import { GridElement } from './productItem.css';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CategoryIcon from '@material-ui/icons/Category';
import WatchIcon from '@material-ui/icons/Watch';
import ComputerIcon from '@material-ui/icons/Computer';

import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const ProductItem = ({ productInfo }) => {
    const dispatch = useDispatch();
    const getProductIcon = (category) => {
        switch (category) {
            case 1:{
                return  <PhoneAndroidIcon fontSize="large"/>;
            }case 2:{
                return  <WatchIcon fontSize="large"/>;
            }case 3:{
                return  <CategoryIcon fontSize="large"/>;
            }case 4:{
                return  <ComputerIcon fontSize="large"/>;
            }default: {
                return <CategoryIcon/>;
            }
        }
    } 

    return (
        <GridElement key={productInfo.id}>
            <br/><br/>
            {getProductIcon(productInfo.category_id)}
            <br/><br/>
            {productInfo.name}
            <br/><br/>
            {productInfo.promo_id 
            ? productInfo.promo_price 
            : productInfo.price + " zł"}
            <br/><br/>
            <button onClick={ e => dispatch(reduceProductQuantityFromCart({
                    productId : productInfo.id
                }))}>-1</button>
                
                <button onClick={ e => dispatch(addProductToCart({
                    productId : productInfo.id,
                    productName : productInfo.name,
                    price : productInfo.promo_id ? productInfo.promo_price : productInfo.price,
                }))}>+1</button>
                            
                <button onClick={ e => dispatch(removeProductFromCart({
                    productId : productInfo.id
                }))}>DELETE</button>

            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" 
                        value={productInfo.rating}
                        readOnly
                        precision={0.5} />
            </Box>
        </GridElement>
    );
}

export default ProductItem;