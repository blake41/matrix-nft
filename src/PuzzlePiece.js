import React from 'react';
import './Puzzle.css'
import SecretImage from 'url:./img/secret-image.jpeg';
import LostOne from 'url:./img/lost/1.jpg';
import LostTwo from 'url:./img/lost/2.jpg';
import LostThree from 'url:./img/lost/3.jpg';
import LostFour from 'url:./img/lost/4.jpg';
import LostFive from 'url:./img/lost/5.jpg';
import LostSix from 'url:./img/lost/6.jpg';
import LostSeven from 'url:./img/lost/7.jpg';
import LostEight from 'url:./img/lost/8.jpg';
import LostNine from 'url:./img/lost/9.jpg';
import LostTen from 'url:./img/lost/10.jpg';
import LostEleven from 'url:./img/lost/11.jpg';
import LostTwelve from 'url:./img/lost/12.jpg';
import LostThirteen from 'url:./img/lost/13.jpg';
import LostFourteen from 'url:./img/lost/14.jpg';
import LostFifteen from 'url:./img/lost/15.jpg';
// import LostSixteen from 'url:./img/lost/16.png';
// import LostSeventeen from 'url:./img/lost/17.png';
// import LostEighteen from 'url:./img/lost/18.png';
// import LostNineteen from 'url:./img/lost/19.png';
// import LostTwenty from 'url:./img/lost/20.png';

import classNames from 'classNames'
export default function PuzzlePiece(props) {
  const secretUrl = {
    0: LostOne,
    12: LostThirteen,
    10: LostEleven,
    14: LostFifteen,
    11: LostTwelve,
    13: LostFourteen,
    7: LostEight,
    8: LostNine,
    9: LostTen,
    1: LostTwo,
    2: LostThree,
    3: LostFour,
    4: LostFive,
    5: LostSix,
    6: LostSeven
  }

  const key = (props.tokenId) % 15
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
