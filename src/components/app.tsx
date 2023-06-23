'use client';

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import PageButton from './PageButton';
import ConnectButton from './ConnectButton';

const App: React.FC = () => {
  const [provider, setProvider] = useState({});
  const [signer, setSigner] = useState({});
  const [signerAddress, setSignerAddress] = useState('');

  useEffect(() => {
    const onLoad = async () => {
      const provider = await new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
    };

    onLoad();
  }, []);

  const getSigner = async (provider: any) => {
    provider.send('eth_requestAccounts', []);
    const signer = await provider.getSigner();
    setSigner(signer);
  };

  const isConnected = () => signer !== undefined;

  const getWalletAddress = () => {
    signer.getAddress().then((address) => {
      setSignerAddress(address);

      // todo: connect weth and uni contracts
    });
  };

  if (signer !== undefined) {
    getWalletAddress();
  }

  return (
    <div className="App">
      <div className="appNav">
        <div className="my-2 buttonContainer buttonContainerTop">
          <PageButton name={'Swap'} isBold={true} />
          <PageButton name={'Pool'} isBold={false} />
          <PageButton name={'Vote'} isBold={false} />
          <PageButton name={'Charts'} isBold={false} />
        </div>
      </div>

      <div className="rightNav">
        <div className="connectButtonContainer">
          {/* <ConnectButton
            provider={provider}
            isConnected={isConnected}
            signerAddress={signerAddress}
            getSigner={getSigner}
          /> */}
          <ConnectButton />
        </div>

        <div className="buttonContainer">
          <PageButton name={'...'} isBold={true} />
        </div>
      </div>
    </div>
  );
};

export default App;
