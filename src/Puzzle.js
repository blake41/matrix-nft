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
  const [show, setShow] = useState(false)
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
            <PuzzlePiece show={show} src={itemHolder[i].metadata} tokenId={itemHolder[i].token_id}/>
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
  }

  function generateLayout() {
    return _.map(new Array(props.items), function(item, i) {
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
    <div>
      <button onClick={() => setShow(!show)}>Show Secret</button>
      <ReactGridLayout
        layout={layout}
        {...props}
      >
        {generateDOM(state.items)}
      </ReactGridLayout>
    </div>

  );
}
