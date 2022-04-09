/* eslint-disable no-param-reassign */
import { ConnectWallet } from '@amfi/connect-wallet';

import { connectWallet as connectWalletConfig } from '../../config/index';

export class WalletService {
  connectWallet;

  constructor() {
    this.connectWallet = new ConnectWallet();
  }

  async initWalletConnect(
    providerName,
    chainName,
  ) {
    const { provider, network, settings } = connectWalletConfig(chainName);

    try {
      const connecting = await this.connectWallet.connect(
        provider[providerName],
        network,
        settings,
      );

      return connecting;
    } catch (error) {
      console.error('initWalletConnect providerWallet err: ', error);
      return false;
    }
  }

  resetConnect() {
    this.connectWallet.resetConect();
  }

  eventSubscribe() {
    return this.connectWallet.eventSubscriber();
  }

  Web3() {
    return this.connectWallet.currentWeb3();
  }

  getAccount() {
    return this.connectWallet.getAccounts();
  }

  sendTransaction(transactionConfig, walletAddress) {
    return this.Web3().eth.sendTransaction({
      ...transactionConfig,
      from: walletAddress,
    });
  }
}