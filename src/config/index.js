import usdtAbi  from '../abis/usdtAbi';

export const isMainnet = true;

export const chains = {
  'Ethereum': {
    name: 'Ethereum',
    chainId: isMainnet ? 1 : 42,
    provider: {
      MetaMask: { name: 'MetaMask' },
    },
  },
};

export const connectWallet = (newChainName) => {
  const chain = chains[newChainName];
  return {
    network: {
      chainName: chain.name,
      chainID: chain.chainId,
    },
    provider: chain.provider,
    settings: { providerType: true },
  };
};



export const contractsConfig = {
  decimals: 18,
  contracts: {
    usdt: {
      mainnet: {
        address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        abi: usdtAbi,
      },
    },
  }
}