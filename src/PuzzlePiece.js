import React from 'react';
import './Puzzle.css'
import SecretImage from 'url:./img/secret-image.jpeg';
import LostOne from 'url:./img/lost/1.png';
import LostTwo from 'url:./img/lost/2.png';
import LostThree from 'url:./img/lost/3.png';
import LostFour from 'url:./img/lost/4.png';
import LostFive from 'url:./img/lost/5.png';
import LostSix from 'url:./img/lost/6.png';
import LostSeven from 'url:./img/lost/7.png';
import LostEight from 'url:./img/lost/8.png';
import LostNine from 'url:./img/lost/9.png';
import LostTen from 'url:./img/lost/10.png';
import LostEleven from 'url:./img/lost/11.png';
import LostTwelve from 'url:./img/lost/12.png';
import LostThirteen from 'url:./img/lost/13.png';
import LostFourteen from 'url:./img/lost/14.png';
import LostFifteen from 'url:./img/lost/15.png';
import LostSixteen from 'url:./img/lost/16.png';
import LostSeventeen from 'url:./img/lost/17.png';
import LostEighteen from 'url:./img/lost/18.png';
import LostNineteen from 'url:./img/lost/19.png';
import LostTwenty from 'url:./img/lost/20.png';

import classNames from 'classNames'
export default function PuzzlePiece(props) {
  const secretUrl = {
    0: LostOne,
    1: LostTwo,
    2: LostThree,
    3: LostFour,
    4: LostFive,
    5: LostSix,
    6: LostSeven,
    7: LostEight,
    8: LostNine,
    9: LostTen,
    10: LostEleven,
    11: LostTwelve,
    12: LostThirteen,
    13: LostFourteen,
    14: LostFifteen,
    15: LostSixteen,
    16: LostSeventeen,
    17: LostEighteen,
    18: LostNineteen,
    19: LostTwenty
  }

  const key = props.tokenId
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
