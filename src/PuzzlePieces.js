import React from 'react';
import './Puzzle.css'
import SecretImage from './img/secret-image.jpeg';

function Piece(props) {
  return (<div className="puzzle-piece">
            <img className="nft-main" src={props.src}></img>
            <img className="nft-secret" src={props.secretUrl}></img>
          </div>
          )
}

export default function PuzzlePieces(props) {
  const piecesData = props.pieces
  const Pieces = piecesData.map((piece, i) => {
    return <Piece key={i} src={piece.url} secretUrl={piece.secretUrl}/>
  })
  return(
    <div>{Pieces}</div>
  )
}
