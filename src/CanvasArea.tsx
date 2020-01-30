import React from 'react';
import CanvasDraw from 'react-canvas-draw';
import styled from 'styled-components';
import { ITheme } from './interfaces';

const MainPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin-top: 50px;
`;

const CanvasWrapper = styled.div`
	border: 5px solid ${props => props.theme.main};
	-webkit-box-shadow: 10px 10px 0px 4px ${props => props.theme.main};
	-moz-box-shadow: 10px 10px 0px 4px ${props => props.theme.main};
	box-shadow: 10px 10px 0px 4px ${props => props.theme.main};
	z-index: 5;
`;

const CanvasButtonList = styled.nav`
	display: flex;
	flex-direction: column;
`;

const CanvasButton = styled.button`
	background: white;
	border: 5px solid ${props => props.theme.main};
	border-right: none;
	padding: 10px;
	color: ${props => props.theme.main};
	cursor: pointer;
	font-size: 1.2rem;
	-ms-transform: skewX(-20deg);
  -webkit-transform: skewX(-20deg);
	transform: skewX(-20deg);
	width: 150%;
	text-align: left;
`;

export default function CanvasArea({ theme }: { theme: ITheme }) {
	let canvas: any;
	return (
		<MainPage>
			<CanvasButtonList>
				<CanvasButton onClick={() => canvas.clear()}>CLEAR</CanvasButton>
				<CanvasButton onClick={() => canvas.undo()}>UNDO</CanvasButton>
			</CanvasButtonList>
			<CanvasWrapper>
				<CanvasDraw
					brushColor={theme.main}
					ref={canvasDraw => (canvas = canvasDraw)}
				/>
			</CanvasWrapper>
		</MainPage>
	);
}
