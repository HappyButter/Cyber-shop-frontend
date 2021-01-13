import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { Box, CarouselWrapper } from './adsCarousel.css';
 
const items = [
    <Box>1</Box>,
    <Box>2</Box>,
    <Box>3</Box>
];

const Carousel = () => (
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
);

export default Carousel;