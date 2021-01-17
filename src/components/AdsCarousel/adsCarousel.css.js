import styled from 'styled-components';

export const Box = styled.div({
    background: 'red',
    // height: '50px',
    // width: '50px'
});

export const CarouselWrapper = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    width: 100%;
    /* border: 3px solid; */
    
    li.alice-carousel__stage-item :not(.__cloned) {
        width: auto !important;
        width: 100%;
        height: 300px;
  }
`;
