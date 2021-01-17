import React, { useState, useEffect } from 'react';
import { GridContainer, GridElement } from './recommended.css';
import axios from '../../axios-config.js';


const Recommended = () => {
    const [recommendedItems, setRecommendedItems] = useState([]);
    const getRecommendedItems = () => {
        axios.get('/products/recommended')
            .then(res => {
                setRecommendedItems(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    };

    useEffect( () => {
        getRecommendedItems();
    },[])

    const items = recommendedItems.map(item => (
        <GridElement key={item.id}>{item.name}</GridElement>
    ));


    return (
    <GridContainer>
        {items}
    </GridContainer>
    );
}

export default Recommended;