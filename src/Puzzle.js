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

  function generateDOM(items) {
    var itemHolder = {}
    items.forEach((item) => itemHolder[item.token_id] = item)
    return _.map(new Array(props.items),(item, i) => {
      if (itemHolder[i]) {
        return (
          <div key={i}>
            <PuzzlePiece src={itemHolder[i].metadata} tokenId={itemHolder[i].token_id}/>
          </div>
        )
      } else {
        return (
          <div key={i}>
            <span className="text">{i}</span>
          </div>
        )
      }
    })
    // return items.sort(function(a, b) {
    //   return a.token_id - b.token_id;
    // }).map((piece, i) => {
    //   return PuzzlePiece({key: i, src: piece.metadata, tokenId: piece.token_id})
    // })
  }

  function generateLayout() {
    return _.map(new Array(props.items), function(item, i) {
      console.log(i)
      return {
        x: i % props.cols,
        y: 0,
        w: 1,
        h: 6,
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
