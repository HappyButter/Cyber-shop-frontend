import React from 'react';
import { GridContainer } from './productGrid.css';
import ProductItem from '../ProductItem/ProductItem';

const ProductGrid = ({ productsInfo }) => {

    const items = productsInfo.map(item => (
        <ProductItem productInfo={item} />
    ));


    return (
        <GridContainer>
            {items}
        </GridContainer>
    );
}

export default ProductGrid;