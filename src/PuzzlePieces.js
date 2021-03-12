import React from 'react';
import './Puzzle.css'
import SecretImage from 'url:./img/secret-image.jpeg';
import LostOne from 'url:./img/lost1.jpeg';
import LostTwo from 'url:./img/lost2.jpeg';
import LostThree from 'url:./img/lost3.jpeg';
import Box from './Box.js'
import Bucket from './Bucket'



function Piece(props) {
  const secretUrl = {
    0: LostOne,
    1: LostTwo,
    2: LostThree
  }

  const key = props.tokenId % 3
  return (
    <div className="puzzle-piece">
      <img className="nft-main" src={props.src}></img>
      <img className="nft-secret" src={secretUrl[key]}></img>
    </div>
  )
}

export default function PuzzlePieces(props) {
  const piecesData = props.pieces
  const Pieces = piecesData.sort(function(a, b) {
    return a.token_id - b.token_id;
  }).map((piece, i) => {
    return <Piece key={i} src={piece.metadata} tokenId={piece.token_id}/>
  })
  return(
    <div>
      <Bucket />
      <Box />
    </div>
  )
}
