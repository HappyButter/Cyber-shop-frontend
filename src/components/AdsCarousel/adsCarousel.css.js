import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.div`
    background-color: red;
    position: relative;
    height: 300px;
    /* width: 100%; */
    /* height: 100%; */
    // width: '50px'
`;

export const CarouselWrapper = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    width: 100%;
    /* border: 3px solid; */
    
    li.alice-carousel__stage-item :not(.__cloned) {
        width: auto !important;
        /* width: 100%; */
        /* height: 300px; */
  }
`;

export const CarouselLink = styled(Link)`
   /* -webkit-user-drag: none;
   user-select: none; */
`;