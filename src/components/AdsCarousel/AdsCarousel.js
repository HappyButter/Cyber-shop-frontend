import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { Box, CarouselWrapper, CarouselLink } from './adsCarousel.css';

import {  useSelector } from 'react-redux';


const Carousel = () => {
    const promos = useSelector(state => state.promos.promosList);
    
    const items = promos.map(promo => ( 
        <CarouselLink to={`/promo/${promo.id}`} onDragStart={e => e.preventDefault()}>
            <Box key={promo.id}>
                {promo.title}
            </Box>
        </CarouselLink>
    ));
    
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