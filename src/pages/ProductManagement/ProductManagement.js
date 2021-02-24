import { ProductList, ProductForm } from 'components';
import { Middlepane } from 'styles/Middlepane.css';
import 'styles/verticalBoxes.css';
import { getAllProducts } from 'state/products/productActions';
import { getAllCategories } from 'state/categories/categoriesActions';

import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const ProductManagement = () => {
    const dispatch = useDispatch();
    const [detailsFormOpen, setDetailsFromOpen] = useState(false);


    useEffect( () => {
        dispatch(getAllProducts());
        dispatch(getAllCategories());
    },[dispatch] )

    return (
        <Middlepane>
            <div className="left">
                <ProductList
                    setDetailsFromOpen={setDetailsFromOpen}
                />
            </div>
            <div className="right">
                <ProductForm 
                    detailsFormOpen={detailsFormOpen}
                    setDetailsFromOpen={setDetailsFromOpen}             
                />
            </div>
        </Middlepane>
    )
}

export default ProductManagement;