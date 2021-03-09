import React, { useContext, useEffect, useState } from 'react';
import PuzzlePieces from './PuzzlePieces.js'
import './Puzzle.css'
import DaftPunkA from './img/daft-punk-one.jpeg';
import DaftPunkB from './img/daft-punk-gilar-artoholic.jpeg';
import DaftPunkC from './img/daft-punk-c.jpeg';
import { appStore, onAppMount } from './state/app';
import {
	getContract
} from './utils/near-utils';

export default function Puzzle(props) {
  const { state, dispatch, update } = useContext(appStore);
	const { near, wallet, contractAccount, account, localKeys, loading } = state;
  const [items, setItems] = useState([]);
  const onMount = () => {
		dispatch(onAppMount());
	};
	useEffect(onMount, []);

  const loadItems = async () => {
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
		console.log('loaded items', newItems);
    setItems(newItems)
	};
  if (contractAccount) {
   loadItems();
  }
  return(
    <PuzzlePieces pieces={items}/>
  )
}
