import React from 'react';
import './Puzzle.css'
import SecretImage from 'url:./img/secret-image.jpeg';
import LostOne from 'url:./img/lost1.jpeg';
import LostTwo from 'url:./img/lost2.jpeg';
import LostThree from 'url:./img/lost3.jpeg';

export default function PuzzlePiece(props) {
  const secretUrl = {
    0: LostOne,
    1: LostTwo,
    2: LostThree
  }

  const key = props.tokenId % 3
  // <img className="nft-main" src={props.src}></img>
  // <img className="nft-secret" src={secretUrl[key]}></img>
  // className="puzzle-piece"
  console.log(props)
  return (
    <div key={props.myKey}>
      <span className="text">{props.myKey}</span>
    </div>
  )
}
