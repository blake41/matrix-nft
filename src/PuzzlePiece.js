import React from 'react';
import './Puzzle.css'
import SecretImage from 'url:./img/secret-image.jpeg';
import LostOne from 'url:./img/lost1.jpeg';
import LostTwo from 'url:./img/lost2.jpeg';
import LostThree from 'url:./img/lost3.jpeg';
import classNames from 'classNames'
export default function PuzzlePiece(props) {
  const secretUrl = {
    0: LostOne,
    1: LostTwo,
    2: LostThree
  }

  const key = props.tokenId % 3
  const secretClasses = {
    "nft-secret-show": props.show,
    "nft-secret-hide": !props.show,
    "nft-secret": true
  }
  const mainClasses = {
    "nft-main-hide": props.show,
    "nft-main": true
  }
  return (
    <div className="puzzle-piece-container">
      <img className={classNames(mainClasses)} src={props.src}></img>
      <img className={classNames(secretClasses)} src={secretUrl[key]}></img>
    </div>
  )
}
