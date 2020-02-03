import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Board = styled.div`
	width: 30%;
	height: 400px;
`;

const TileList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`
const Tile = styled.li`
  height: 120px;
  width: 80px;
  margin: 10px;
  color: ${props => props.theme.tertiary};
  border: 3px solid ${props => props.theme.main};
  -webkit-box-shadow: 10px 10px 0px 4px ${props => props.theme.main};
	-moz-box-shadow: 10px 10px 0px 4px ${props => props.theme.main};
	box-shadow: 4px 4px 0px 2px ${props => props.theme.main};
  font-size: 4rem;
  text-align: center;
`

export default function KanjiBoard() {
	const [tiles, setTiles] = useState<Array<number>>([]);

	const getTiles = () => {
		setTiles(new Array(8).fill(1));
	};

	useEffect(() => {
		getTiles();
	}, []);

	return (
		<Board>
			<TileList>
				{tiles.map(tile => (
					<Tile key={tile}>漢</Tile>
				))}
			</TileList>
		</Board>
	);
}
