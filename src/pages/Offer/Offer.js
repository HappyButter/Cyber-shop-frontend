import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategoryId } from 'state/products/productActions';
import { ProductGrid } from 'components';
import { useSnackbar } from 'notistack';
import { Middlepane } from 'styles/Middlepane.css';

const categoriesEnum = {
    1 : 'Laptopy i komputery',
    2 : 'Smartfony i smartwatche',
    3 : 'Podzespoły komputerowe'        
}

const Offer = () => {
    const dispatch = useDispatch();
    const { categoryId } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    
    useEffect( () => {
        dispatch(getProductsByCategoryId(categoryId));
    },[dispatch, categoryId]);

    
    const categoryProducts = useSelector(state => state.products.categoryProducts);
    const categoriesList = useSelector(state => state.categories.categoriesList);
    const currentCategories = categoriesList.filter(category => category.category_name === categoriesEnum[categoryId]);

    const items = currentCategories.map(cat => (
        <>
            <hr/><br/>
            <h2>{cat.category_group}</h2>
            <br/><hr/><br/>

            <ProductGrid 
                productsInfo={categoryProducts.filter(prod => prod.category_id === cat.id)} 
                enqueueSnackbar={enqueueSnackbar} 
            />
            
            <br/>
        </>)
    )

    return (
        <Middlepane>
            {items}
        </Middlepane>
    );
};

export default Offer;
