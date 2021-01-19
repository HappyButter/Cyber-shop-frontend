import styled from 'styled-components';

export const Paragraph = styled.p`
    color: rgba(255,255,255,.75);
    font-size: 180%;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    font-family: 'Anonymous Pro', monospace;
`;

export const Middlepane = styled.div`
	overflow: auto;
	scroll-behavior: smooth;
	width: 60vw;
	/* height: 100%; */
	/* min-height: 100vh; */
	text-align: center;
	align-items: center;
	margin: 0 auto;
	/* padding: 30px 50px; */
	box-shadow: 
	inset 0 -3em 3em rgba(0,0,0,0.1), 
    0.3em 0.3em 1em rgba(0,0,0,0.5);
    border: 2px solid;
    /* justify-content: center; */
`;