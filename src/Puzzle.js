import React, { useContext } from 'react';
import PuzzlePieces from './PuzzlePieces.js'
import './Puzzle.css'
import { appStore } from './state/app';
export default function Puzzle(props) {
  const { state } = useContext(appStore);
  return(
    <PuzzlePieces pieces={state.items}/>
  )
}
