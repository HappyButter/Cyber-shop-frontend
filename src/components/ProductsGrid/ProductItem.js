import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../state/cart/cartActions';

import { GridElement, CustomLink, Btn } from './productItem.css';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CategoryIcon from '@material-ui/icons/Category';
import WatchIcon from '@material-ui/icons/Watch';
import ComputerIcon from '@material-ui/icons/Computer';

import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const ProductItem = ({ productInfo, enqueueSnackbar }) => {
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

    const handleAddToCart = () => {
        dispatch(addProductToCart({
            productId : productInfo.id,
            productName : productInfo.name,
            price : productInfo.promo_id ? productInfo.promo_price : productInfo.price,
            enqueueSnackbar
        }))
    }

    return (
        <GridElement key={productInfo.id}>
            <br/>
            <CustomLink to={`/product/${productInfo.id}`}>
                {getProductIcon(productInfo.category_id)}
                <br/><br/>
                {productInfo.name}
                <br/><br/>
                {productInfo.promo_id 
                ? productInfo.promo_price + " zł" 
                : productInfo.price + " zł"}
            </CustomLink>
            <br/><br/>
            <Box component="fieldset" mb={1} borderColor="transparent">
                <Rating name="read-only" 
                        value={parseFloat(productInfo.rating)}
                        readOnly
                        precision={0.5} />
                <hr/>
            </Box>

            <Btn onClick={ handleAddToCart }>
                <ShoppingCartIcon/>
            </Btn>
        </GridElement>
        
    );
}

export default ProductItem;