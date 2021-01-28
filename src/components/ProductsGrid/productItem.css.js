import styled from 'styled-components';
import { Link } from "react-router-dom";

export const GridElement = styled.div`
	min-height: 300px;
	background: rgba( 255, 255, 255, 0.25 );
	box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
	backdrop-filter: blur( 13.5px );
	-webkit-backdrop-filter: blur( 13.5px );
	border-radius: 10px;
`;

export const CustomLink = styled(Link)`
    text-decoration: none;

	&:visited {
		text-decoration: none;	
	}
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
	padding: 8px 20px;
	text-decoration:none;
    text-shadow:-7px 1px 30px #2f6627;

    &:active {
        top:2px;
    }
` 