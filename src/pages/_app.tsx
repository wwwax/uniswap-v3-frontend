import { JSX } from 'react';
import { AppProps } from 'next/app';

import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
