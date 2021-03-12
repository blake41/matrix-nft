import React, { useContext, useEffect, useState } from 'react';
import PuzzlePiece from './PuzzlePiece.js'
import './Puzzle.css'
import { appStore } from './state/app';
import LostOne from 'url:./img/lost1.jpeg';
import LostTwo from 'url:./img/lost2.jpeg';
import LostThree from 'url:./img/lost3.jpeg';
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

export default function Puzzle() {
  const { state } = useContext(appStore);
  const props = {
    className: "layout",
    items: 20,
    rowHeight: 30,
    cols: 5
  };
  function PuzzlePiece(props) {
    const secretUrl = {
      0: LostOne,
      1: LostTwo,
      2: LostThree
    }
    const key = props.tokenId % 3
    // className="puzzle-piece"
    console.log(props)
    return (
      <div key={props.key}>
        <img className="nft-main" src={props.src}></img>
        <img className="nft-secret" src={secretUrl[key]}></img>
      </div>
    )
  }
  function generateDOM(items) {
    return items.sort(function(a, b) {
      return a.token_id - b.token_id;
    }).map((piece, i) => {
      return PuzzlePiece({key: i, src: piece.metadata, tokenId: piece.token_id})
    })
  }

  function generateLayout() {
    return _.map(new Array(props.items), function(item, i) {
      // const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: i % props.cols,
        y: 1,
        w: 1,
        h: 5,
        i: i.toString()
      };
    });
  }
  const [layout, setLayout] = useState()
  useEffect(() => {
    setLayout(generateLayout())
  }, [])
  return (
    <ReactGridLayout
      layout={layout}
      {...props}
    >
      {generateDOM(state.items)}
    </ReactGridLayout>
  );
}
