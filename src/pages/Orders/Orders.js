import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CategoriesBar, AppBar, OrderList } from 'components';
import { Middlepane } from 'styles/Middlepane.css';

import { getAllOrders } from 'state/orders/ordersActions';

const Orders = () => {
    const dispatch = useDispatch();
    
    useEffect( () => {
        dispatch(getAllOrders())
    },[dispatch]);


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
