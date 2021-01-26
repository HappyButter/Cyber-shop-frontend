import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesBar, AppBar, OrderList } from 'components';
import { Middlepane } from 'styles/Middlepane.css';

import { getAllOrders, getUserOrders } from 'state/orders/ordersActions';

const Orders = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    useEffect( () => {
        auth.isAdmin 
        ? dispatch(getAllOrders())
        : dispatch(getUserOrders({userId : auth.user.id}))
    
    },[dispatch, auth]);


    return (
        <>
            <AppBar></AppBar>
            <CategoriesBar></CategoriesBar>
            <Middlepane>
                <OrderList/>
            </Middlepane>
        </>
    );
};

export default Orders;
