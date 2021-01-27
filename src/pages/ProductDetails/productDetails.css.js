import styled from 'styled-components';

export const Paragraph = styled.p`
    color: rgba(255,255,255,.75);
    font-size: 180%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    font-family: 'Anonymous Pro', monospace;
`;

export const Btn = styled.div`
	background:linear-gradient(to bottom, #44c767 5%, #5cbf2a 100%);
	background-color:#44c767;
	border-radius:10px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:18px;
	padding: 10px 40px;
	text-decoration:none;
    text-shadow:-7px 1px 30px #2f6627;
    
    &:hover {
        background-color:#5cbf2a;
    }

    &:active {
        position:relative;
        top:1px;
    }
`     