import React from 'react';
import logo from './logo.svg';
import CanvasArea from './CanvasArea';
import Header from './Header';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { ITheme } from './interfaces';

const AppWrapper = styled.main`
	display: flex;
	flex-direction: column;
	border: 1px solid red;
	height: 100vh;
	width: 100vw;
`;

const theme = {
	main: '#f54242',
	shadow: '#b31b10'
};

const App: React.FC = () => (
	<ThemeProvider theme={theme}>
		<AppWrapper>
			<Header />
			<CanvasArea theme={theme} />
		</AppWrapper>
	</ThemeProvider>
);

export default App;
