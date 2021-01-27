import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.div`
    background-color: white;
    height: 300px;
    border-radius: 30px;
    text-align: center;
    color: palevioletred;
    background: papayawhip;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`;

export const CarouselWrapper = styled.div`
    width: 100%;
    font-size: 3em;
    li.alice-carousel__stage-item :not(.__cloned) {
        width: auto !important;
  }
`;

export const CarouselLink = styled(Link)`
    text-decoration: none;

    &:hover {
        color: red; // <Thing> when hovered
    }
`;