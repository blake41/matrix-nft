
import React, { useEffect, useState, useContext } from 'react';
import { appStore, onAppMount } from './state/app';
import { getContract } from './utils/near-utils';

export default function DataLoader(props) {
  const [fetching, setFetching] = useState(false);
  const { state, update } = useContext(appStore);

  useEffect(() => {
    if (!fetching && state.items.length === 0){
      console.log('loading items')
      loadItems()
    }
  });
  const loadItems = async () => {
    setFetching(true);
    const contract = getContract(state.contractAccount);
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
    update('items', newItems)
    setFetching(false);
  };

  return(<>
    {props.children}
  </>
  )
}
