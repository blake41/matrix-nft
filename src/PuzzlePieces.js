import React from 'react';
import './Puzzle.css'
import SecretImage from './img/secret-image.jpeg';
import LostOne from './img/lost1.jpeg';
import LostTwo from './img/lost2.jpeg';
import LostThree from './img/lost3.jpeg';

function Piece(props) {
  const secretUrl = {
    1: LostOne,
    2: LostTwo,
    3: LostThree
  }

  return (
    <div className="puzzle-piece">
      <img className="nft-main" src={props.src}></img>
      <img className="nft-secret" src={secretUrl[props.secretUrl]}></img>
    </div>
  )
}

export default function PuzzlePieces(props) {
  const piecesData = props.pieces
  const Pieces = piecesData.sort(function(a, b) {
    return a.token_id - b.token_id;
  }).map((piece, i) => {
    return <Piece key={i} src={piece.metadata} secretUrl={piece.token_id}/>
  })
  return(
    <div>{Pieces}</div>
  )
}
