
import React, { useEffect, useContext } from 'react';
import { appStore, onAppMount } from './state/app';

export default function AppContainer(props) {
const { state, dispatch } = useContext(appStore);
  const onMount = () => {
  	console.log('mounted')
  	dispatch(onAppMount());
  };
  useEffect(onMount, []);

  return(<>
    {state.account && props.children}
  </>
  )
}
