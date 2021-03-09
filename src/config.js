const CONTRACT_NAME = 'my-second-nft.blakeneartest.testnet'
module.exports = function getConfig() {
	let config = {
		networkId: 'testnet',
		nodeUrl: 'https://rpc.testnet.near.org',
		walletUrl: 'https://wallet.testnet.near.org',
		helperUrl: 'https://helper.testnet.near.org',
		contractName: CONTRACT_NAME
	};

	return config;
};
