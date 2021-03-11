import React, { useContext } from 'react';
import PuzzlePieces from './PuzzlePieces.js'
import './Puzzle.css'
import { appStore } from './state/app';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

export default function Puzzle(props) {
  const { state } = useContext(appStore);
  return (
      <DndProvider backend={HTML5Backend}>
        <PuzzlePieces pieces={state.items}/>
      </DndProvider>
  );
}
