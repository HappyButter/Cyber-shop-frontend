import React from 'react';
import { GridContainer } from './productGrid.css';
import ProductItem from './ProductItem';

const ProductGrid = ({ productsInfo, enqueueSnackbar }) => {

    const items = productsInfo.map(item => (
        <ProductItem 
            productInfo={item}
            enqueueSnackbar={enqueueSnackbar} 
        />
    ));


    return (
        <GridContainer>
            {items}
        </GridContainer>
    );
}

export default ProductGrid;