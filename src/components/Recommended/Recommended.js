import React from 'react';
import { useSelector } from 'react-redux';
import { GridContainer, GridElement } from './recommended.css';


const Recommended = () => {
    const recommendedItems = useSelector(state => state.products.recommended);

    const items = recommendedItems.map(item => (
        <GridElement key={item.id}>
            {item.name}
            <br/><br/>
            {"quantity: " + parseInt(item.inStock)}
        </GridElement>
    ));


    return (
    <GridContainer>
        {items}
    </GridContainer>
    );
}

export default Recommended;