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


    const productIcon = [
        <PhoneAndroidIcon style={{ fontSize: 50 }}/>,
        <WatchIcon style={{ fontSize: 50 }}/>,
        <CategoryIcon style={{ fontSize: 50 }}/>,
        <ComputerIcon style={{ fontSize: 50 }}/>
    ]

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

            <CustomLink to={`/product/${productInfo.id}`}>
                {productIcon[productInfo.category_id-1] || 
            <CategoryIcon style={{ fontSize: 50 }} />}
                <br/><br/>

                {productInfo.name}
                <br/><br/>
                
                {productInfo.promo_id 
                ? Number.parseFloat(productInfo.promo_price).toFixed(2) + " zł" 
                : Number.parseFloat(productInfo.price).toFixed(2) + " zł"}
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