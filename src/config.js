const CONTRACT_NAME = 'my-first-nft.blakeneartest.testnet'
module.exports = function getConfig() {
	let config = {
		networkId: 'default',
		nodeUrl: 'https://rpc.testnet.near.org',
		walletUrl: 'https://wallet.testnet.near.org',
		helperUrl: 'https://helper.testnet.near.org',
		CONTRACT_NAME,
	};

	if (process.env.REACT_APP_ENV !== 'prod') {
		config = {
			...config,
			GAS: '300000000000000',
			DEFAULT_NEW_ACCOUNT_AMOUNT: '5',
			contractMethods: {
				changeMethods: ['new', 'mint_token', 'guest_mint', 'transfer', 'set_price', 'purchase', 'withdraw'],
				viewMethods: ['get_token_data', 'get_num_tokens', 'get_proceeds'],
			},
			accessKeyMethods: {
				changeMethods: ['guest_mint', 'set_price', 'withdraw'],
				viewMethods: ['get_token_data', 'get_num_tokens', 'get_proceeds', 'get_pubkey_minted'],
			},
		};
	}

	return config;
};
