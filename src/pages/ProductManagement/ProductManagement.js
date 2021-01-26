import { AppBar, CategoriesBar, ProductList, ProductForm } from 'components';
import { Middlepane } from 'styles/Middlepane.css';
import 'styles/verticalBoxes.css';
import { getAllProducts } from 'state/products/productActions';
import { getAllCategories } from 'state/categories/categoriesActions';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const ProductManagement = () => {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getAllProducts());
        dispatch(getAllCategories());
    },[dispatch] )

    return (
        <>
            <AppBar></AppBar>
            <CategoriesBar></CategoriesBar>
            <Middlepane>
                <div className="left">
                    <ProductList/>
                </div>
                <div className="right">
                    <ProductForm/>
                </div>
            </Middlepane>
        </>
    )
}

export default ProductManagement;