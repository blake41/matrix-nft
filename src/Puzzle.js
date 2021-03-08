import React from 'react';
import PuzzlePieces from './PuzzlePieces.js'
import './Puzzle.css'
import DaftPunkB from './img/daft-punk-gilar-artoholic.jpeg';
import DaftPunkC from './img/daft-punk-c.jpeg';
import LostOne from './img/lost1.jpeg';
import LostTwo from './img/lost2.jpeg';
import LostThree from './img/lost3.jpeg';

const URLA = 'https://instagram.fsjo14-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/153276485_416716572771811_3196214184203710152_n.jpg?tp=1&_nc_ht=instagram.fsjo14-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=RETMKCysn08AX-9SOB1&oh=331f39e0d3814aec1a0caceb95d54285&oe=606E7EE4'
export default function Puzzle(props) {

  const tempPieces = [{url: URLA, secretUrl: LostOne},{url: DaftPunkB, secretUrl: LostTwo}, {url: DaftPunkC, secretUrl: LostThree}]
  return(
    <PuzzlePieces pieces={tempPieces}/>
  )
}
