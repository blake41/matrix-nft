import React, { useEffect, useState } from 'react';
import PuzzlePieces from './PuzzlePieces.js'
import './Puzzle.css'
import DaftPunkA from './img/daft-punk-one.jpeg';
import DaftPunkB from './img/daft-punk-gilar-artoholic.jpeg';
import DaftPunkC from './img/daft-punk-c.jpeg';
import {
	getContract
} from './utils/near-utils';

export default function Puzzle(props) {
  const [fetching, setFetching] = useState(false);
  const { near, wallet, contractAccount, account, localKeys, loading } = props.state;
  const loadItems = async () => {
    setFetching(true);
    const contract = getContract(contractAccount);
    const num_tokens = await contract.get_num_tokens();
    const newItems = [];
    for (let i = 1; i <= num_tokens; i++) {
      const data = await contract.get_token_data({
        token_id: i
      });
      newItems.push({
        ...data,
        token_id: i
      });
    }
    newItems.reverse();
    props.update('items', newItems)
    setFetching(false);
  };
  useEffect(() => {
    if (!fetching && props.state.items.length === 0 && contractAccount){
      loadItems().then(
        console.log(props.state.items)
      )
    }
  });
  return(
    <PuzzlePieces pieces={props.state.items}/>
  )
}
