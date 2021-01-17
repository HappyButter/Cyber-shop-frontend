import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { Box, CarouselWrapper } from './adsCarousel.css';

import axios from '../../axios-config.js'
 


const Carousel = () => {
    const [sales, setSales] = useState([]);
    const getSales = () => {
        axios.get('/products/sales')
            .then(res => {
                setSales(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    };

    useEffect(() => {
        getSales();
    },[])

    

    const items = sales.map(sale => (<Box key={sale.id}>{sale.title}</Box>))
    
    return (
    <CarouselWrapper>
        <AliceCarousel
            animationType="fadeout" 
            animationDuration={800}
            disableButtonsControls
            infinite
            items={items}
            mouseTracking
            autoPlay
            autoPlayInterval={4000}
        />
    </CarouselWrapper>
    )
};

export default Carousel;