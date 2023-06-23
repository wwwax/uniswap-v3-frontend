'use client';

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

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

  return <div>init</div>;
};

export default App;
