import React, { createContext, useCallback, useContext, useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { WalletService } from '../walletService';
import { contractsConfig, isMainnet } from '../../config/index';

const Web3Context = createContext({});

const WalletConnectContext = ({ children }) => {
  const [address, setAddress] = useState('');
  const [currentSubsriber, setCurrentSubsciber] = useState();
  const WalletConnect = useMemo(() => new WalletService(), []);

  const disconnect = useCallback(() => {
    setAddress('');
    WalletConnect.resetConnect();
    currentSubsriber?.unsubscribe();
    setCurrentSubsciber(null);
  }, [WalletConnect, currentSubsriber]);

  const subscriberSuccess = useCallback(
    (data) => {
      if (document.visibilityState !== 'visible') {
        disconnect();
        return;
      }

      if (data.name === 'accountsChanged') {
        setAddress(data.address);
      }
    },
    [WalletConnect, disconnect]
  );

  const subscriberError = useCallback(
    (err) => {
      console.error(err);
      if (err.code === 4) {
        toast.error('You changed to wrong network. Please choose Ethereum');
        disconnect();
      }
    },
    [disconnect]
  );

  const connect = useCallback(
    async (provider, chain) => {
      const connected = await WalletConnect.initWalletConnect(provider, chain);
      if (connected) {
        try {
          if (!currentSubsriber) {
            const sub = WalletConnect.eventSubscribe().subscribe(
              subscriberSuccess,
              subscriberError
            );
            setCurrentSubsciber(sub);
          }

          const accountInfo = await WalletConnect.getAccount();
          if (accountInfo.address) {
            setAddress(accountInfo.address);
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    // eslint-disable-next-line max-len
    [WalletConnect, address, subscriberError, subscriberSuccess, currentSubsriber]
  );

  const payUsdt = useCallback(
    (usdtAmount) => {
      const recieverAddress = '0x904b14174286cedd8086bba62e0de2c5a466ede3';
      const { abi: tokenAbi, address: tokenAddress } =
        contractsConfig.contracts['usdt'][isMainnet ? 'mainnet' : 'testnet'];

      const web3 = WalletConnect.Web3();
      const usdtContract = new web3.eth.Contract(tokenAbi, tokenAddress)
      
      // eslint-disable-next-line no-undef
      usdtContract.methods.transfer(recieverAddress,  BigInt(Number(usdtAmount) * 10 ** 6) )
      .send({ from: address});

    },
    [address, WalletConnect],
  );

  useEffect(() => {
    // connect user if he connected previously
    if (connect) {
      connect('MetaMask', 'Ethereum');
    }
  }, []);

  return (
    <Web3Context.Provider value={{ connect, disconnect, walletService: WalletConnect, payUsdt, address }}>
      {children}
    </Web3Context.Provider>
  );
};

const useWalletConnectorContext = () => useContext(Web3Context);

export { WalletConnectContext, useWalletConnectorContext };
