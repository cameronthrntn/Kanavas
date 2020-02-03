import React from 'react';
import styled from 'styled-components';
import Kanavas from './Kanavas.svg';

const HeaderWrapper = styled.nav`
	background-color: ${props => props.theme.main};
	padding-top: 20px;
	padding-bottom: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 25px;
`;

const Logo = styled.img`
	width: 40%;
`;

const Links = styled.ul`
	list-style: none;
	padding: 0;
`;

const Button = styled.button`
	border-radius: 5px;
	background: none;
	background-color: white;
	color: ${props => props.theme.tertiary};
	border: none;
	padding: 15px;
	margin-left: 20px;
	margin-right: 20px;
	font-weight: bold;
	-webkit-box-shadow: 10px 10px 0px 4px ${props => props.theme.shadow};
	-moz-box-shadow: 10px 10px 0px 4px ${props => props.theme.shadow};
	box-shadow: 0px 5px 0px 0px ${props => props.theme.shadow};
	cursor: pointer;
	:hover {
		transform: translateY(2px);
		-webkit-box-shadow: 10px 10px 0px 4px ${props => props.theme.shadow};
		-moz-box-shadow: 10px 10px 0px 4px ${props => props.theme.shadow};
		box-shadow: 0px 3px 0px 0px ${props => props.theme.shadow};
	}
`;

export default () => (
	<HeaderWrapper>
		<Logo src={Kanavas} alt="Kanavas" />
		<Links>
			<Button>GITHUB</Button>
			<Button>TWITTER</Button>
			<Button>MY SITE</Button>
		</Links>
	</HeaderWrapper>
);
