import styled from 'styled-components';

export const ContentWrapper = styled.div`
    display: flex;
    background-color: rgba(255,255,255,0.2);
`

export const ContentLeft = styled.div`
    display: flex;
    width: 33%;
    float: left;
    border-right: 2px solid darkgray;
`
export const ContentMid = styled.div`
    display: flex;
    float: left;
    width: 47%;
`

export const ContentRight = styled.div`
    display: flex;
    float: left;
    width: 20%;
    border-left: 2px solid darkgray;
`

export const MidContentWrapper = styled.div`
    padding: 10px;
`;


export const Paragraph = styled.p`
    color: rgba(255,255,255,.75);
    font-size: 200%;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    font-family: 'Anonymous Pro', monospace;
`;