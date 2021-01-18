import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CategoriesBar, AppBar } from '../../components';
import { addProductToCart,
        reduceProductQuantityFromCart,
        removeProductFromCart } from '../../state/cart/cartActions';


const Orders = () => {
    const dispatch = useDispatch();
    
    useEffect( () => {
        
    }, [])

    return (
        <>
            <AppBar></AppBar>
            <CategoriesBar></CategoriesBar>
            <br/>
            <h1>Orders</h1>
            <br/>
            <button onClick={ e => dispatch(reduceProductQuantityFromCart({
                productId : 2
            }))}>-1</button>
            
            <button onClick={ e => dispatch(addProductToCart({
                productId : 2,
                productName : "a",
                price : 5 
            }))}>+1</button>
                        
            <button onClick={ e => dispatch(removeProductFromCart({
                productId : 2
            }))}>DELETE</button>
        </>
    );
};

export default Orders;
