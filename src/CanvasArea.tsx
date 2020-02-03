import React, { useState, useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';
import styled from 'styled-components';
import { ITheme } from './interfaces';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import KanjiBoard from './KanjiBoard';

const MainPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

const CanvasSection = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const CanvasWrapper = styled.div`
	border: 5px solid ${props => props.theme.main};
	-webkit-box-shadow: 10px 10px 0px 4px ${props => props.theme.main};
	-moz-box-shadow: 10px 10px 0px 4px ${props => props.theme.main};
	box-shadow: 10px 10px 0px 4px ${props => props.theme.main};
	z-index: 5;
`;

const CanvasControls = styled.div`
	display: flex;
`;

const SliderWrapper = styled.div`
	width: 50%;
	margin-top: 30px;
`;

const CanvasButtonList = styled.nav`
	display: flex;
	flex-direction: column;
`;

const CanvasButtonSubmit = styled(CanvasButtonList)`
	justify-content: flex-end;
`;

const CanvasButton = styled.button`
	background: white;
	border: 5px solid ${props => props.theme.main};
	border-right: none;
	padding: 10px;
	color: ${props => props.theme.main};
	-webkit-box-shadow: 10px 10px 0px 4px ${props => props.theme.main};
	-moz-box-shadow: 10px 10px 0px 4px ${props => props.theme.main};
	box-shadow: 15px 5px 0px 4px ${props => props.theme.main};
	cursor: pointer;
	font-size: 1.2rem;
	text-align: left;
`;

const CanvasSubmit = styled(CanvasButton)`
	text-align: right;
	border: 5px solid ${props => props.theme.main};
	border-left: none;
	-webkit-box-shadow: 10px 10px 0px 4px ${props => props.theme.main};
	-moz-box-shadow: 10px 10px 0px 4px ${props => props.theme.main};
	box-shadow: 5px 10px 0px 4px ${props => props.theme.main};
	z-index: 10;
`;

export default function CanvasArea({ theme }: { theme: ITheme }) {
	let canvas: any;
	const [brushRadius, setBrushRadius] = useState<number>(5);

	const getCanvas = (e: any) => {
		// const { lines } = JSON.parse(canvas.getSaveData());
		// const x: any[] = [];
		// const y: any[] = [];
		// lines.forEach((line: any) => {
		// 	console.log(line.points);

		// 	x.push(line.points.x);
		// 	y.push(line.points.y);
		// });
		// console.dir(x);
		// console.dir(y);
		window.open(canvas.toDataURL('image/png'));
	};

	return (
		<MainPage>
			<CanvasSection>
				<CanvasControls>
					<CanvasButtonList>
						<CanvasButton onClick={() => canvas.clear()}>CLEAR</CanvasButton>
						<CanvasButton onClick={() => canvas.undo()}>UNDO</CanvasButton>
					</CanvasButtonList>
					<CanvasWrapper id='canvasWrapper'>
						<CanvasDraw
							brushColor={theme.tertiary}
							ref={canvasDraw => (canvas = canvasDraw)}
							brushRadius={brushRadius}
							lazyRadius={0}
						/>
					</CanvasWrapper>
					<CanvasButtonSubmit>
						<CanvasSubmit onClick={getCanvas}>SUBMIT</CanvasSubmit>
					</CanvasButtonSubmit>
				</CanvasControls>
				<SliderWrapper>
					<Slider
						min={1}
						max={15}
						value={brushRadius}
						onChange={setBrushRadius}
						defaultValue={5}
						handleStyle={{
							height: 26,
							width: 26,
							marginLeft: -13,
							marginTop: -10,
							border: `5px solid ${theme.main}`,
							boxShadow: 'none'
						}}
						trackStyle={{
							background: theme.main
						}}
					/>
				</SliderWrapper>
			</CanvasSection>
			<KanjiBoard />
		</MainPage>
	);
}
