import styled from 'styled-components';

export const Box = styled.div({
    background: 'palevioletred',
    height: '50px',
    width: '50px'
});

export const CarouselWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    height: 20vh;
    border: 3px solid;
    
    li.alice-carousel__stage-item :not(.__cloned) {
        width: auto !important;
        margin-right: 1rem;
  }
`;
