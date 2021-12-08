import type { AppProps } from 'next/app';

import '../components/Spinner/styles.css';
import '../components/AnimatedResponseIcon/styles.css';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
