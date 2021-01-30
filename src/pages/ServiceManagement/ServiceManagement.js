import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppBar,  
    ProductsInServiceList,
    ProductInServiceForm } from 'components';
import { Middlepane } from 'styles/Middlepane.css';

import { getProductsInService } from 'state/productsService/productsServiceActions';

const ServiceManagement = () => {
    const dispatch = useDispatch();
    
    useEffect( () => {
        dispatch(getProductsInService());
    }, [dispatch])

    return (
        <>
            <AppBar/> 
            <Middlepane>
                <ProductsInServiceList/>
                <ProductInServiceForm/>
            </Middlepane>
        </>
    )
}

export default ServiceManagement;