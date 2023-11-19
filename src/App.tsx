import {useRoutes} from 'react-router-dom';
import {Provider} from 'react-redux';
import Page from './components/Page';

import {CacheProvider} from '@emotion/react';

import {ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import createTheme from './theme';
import Routes from './Routes';
import useTheme from './hooks/useTheme';
import {store} from './redux/store';
import createCache from '@emotion/cache';
import {AuthProvider} from './contexts/JWTContext';
// import 'chart.js/auto';
import {ReactNotifications} from 'react-notifications-component';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

import React, { FC, useMemo, useState } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { Connection, Keypair, clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

const clientSideEmotionCache = createCache({key: 'css'});

import PropTypes from 'prop-types';

function App({emotionCache = clientSideEmotionCache}) {
  const content = useRoutes(Routes);
  const {theme} = useTheme();
  const persistor = persistStore(store);
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // Create a test wallet to listen to
  // const wallet = Keypair.generate();

  // const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
  // // Register a callback to listen to the wallet (ws subscription)
  // connection.onAccountChange(
  //   wallet.publicKey(),
  //   (updatedAccountInfo, context) =>
  //     console.log('Updated account info: ', updatedAccountInfo),
  //   'confirmed'
  // );

  // const wallets = useMemo(
  //   () => [
  //     /**
  //            * Wallets that implement either of these standards will be available automatically.
  //            *
  //            *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
  //            *     (https://github.com/solana-mobile/mobile-wallet-adapter)
  //            *   - Solana Wallet Standard
  //            *     (https://github.com/solana-labs/wallet-standard)
  //            *
  //            * If you wish to support a wallet that supports neither of those standards,
  //            * instantiate its legacy wallet adapter here. Common legacy adapters can be found
  //            * in the npm package `@solana/wallet-adapter-wallets`.
  //            */
  //     //new UnsafeBurnerWalletAdapter(),
  //   ],
  //   [network]
  // );



  return (
   
    <CacheProvider value={emotionCache}>
      <ReactNotifications/>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider>{content}</AuthProvider>
          {/* <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
              <WalletModalProvider> */}
          <WalletMultiButton />
          <WalletDisconnectButton />
          <Page>
          </Page>
          { /* Your app's components go here, nested within the context providers. */ }
          {/* </WalletModalProvider>
            </WalletProvider>
          </ConnectionProvider> */}
        </PersistGate>
      </Provider>
    </CacheProvider>
   
  );
}

App.propTypes = {
  emotionCache: PropTypes.object
};

export default App;
