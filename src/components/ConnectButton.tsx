import React from 'react';

import PageButton from './PageButton';

// const ConnectButton = ({ isConnected, signerAddress, getSigner, provider }) => {
//   const displayAddress = `${signerAddress?.substring(0, 10)}...`;

//   return (
//     <>
//       {isConnected ? (
//         <div className="buttonContainer">
//           <PageButton name={displayAddress} isBold={false} />
//         </div>
//       ) : (
//         <div
//           className="btn my-2 connectButton"
//           onClick={() => getSigner(provider)}
//         >
//           Connect Wallet
//         </div>
//       )}
//     </>
//   );
// };

const ConnectButton = () => {
  return <div className="btn my-2 connectButton">Connect Wallet</div>;
};

export default ConnectButton;
