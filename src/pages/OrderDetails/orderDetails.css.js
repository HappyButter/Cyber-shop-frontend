import styled from 'styled-components';

export const ContentWrapper = styled.div`
    display: flex;
    background-color: rgba(255,255,255,0.35);
`

export const MidContentWrapper = styled.div`
    padding: 10px;
`;

export const ContentLeft = styled.div`
    width: 28%;
    float: left;
    border-right: 2px solid darkgray;
`
export const ContentMid = styled.div`
    float: left;
    width: 44%;
`

export const ContentRight = styled.div`
    float: left;
    width: 28%;
    flex-grow:1;
    border-left: 2px solid darkgray;
`


export const Paragraph = styled.p`
    color: rgba(255,255,255,.75);
    font-size: 200%;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    font-family: 'Anonymous Pro', monospace;
`;