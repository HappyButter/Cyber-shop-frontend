import styled from 'styled-components';

export const Btn = styled.button`
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    color: darkgray;
    font-size: large;
    margin: 0 8px;
    width: 40px;
    height: 40px;

    &:hover{
        background-color: red;
    }
`

export const ControllBtn = styled(Btn)`
    &:hover{
        background-color: green;
    }
`   