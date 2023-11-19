import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, Keypair, SystemProgram, Transaction } from '@solana/web3.js';
import { FC, useCallback } from 'react';

import { NavItem } from './components';

interface Props {
  onSidebarOpen: () => void;

  colorInvert?: boolean;
}

const Topbar = ({
  onSidebarOpen,
  // pages,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  // const { publicKey, sendTransaction } = useWallet();

  const [walletAddress, setWalletAddress] = useState(null);
  const [connection] = useState(new Connection('https://api.devnet.solana.com'));
  const [initializerAmount, setInitializerAmount] = useState('');
  const [takerAmount, setTakerAmount] = useState('');

  // Function to handle wallet connection
  // Function to handle wallet connection
  const handleConnectWallet = async () => {
    try {
      const solana = (window as any).solana;
      if (solana && solana.isPhantom) {
        const response = await solana.connect();
        setWalletAddress(response.publicKey.toString());
      } else {
        alert('Solana wallet not found. Please install Phantom Wallet.');
      }
    } catch (err) {
      console.error('Wallet Connection Error:', err);
      alert('Failed to connect wallet');
    }
  };

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
              : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex', fontSize: '50px' } }} alignItems={'center'} >
        <Box>
          <NavItem
            title={'Home'}
            id={'home-pages'}
            redirect={'/home'}
           
            // items={landingPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Portfolios'}
            id={'news-pages'}
            redirect={'/portfolios'}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Cryptos'}
            id={'meetups-pages'}
            redirect={'/cryptos'}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'NFTs'}
            id={'contact-pages'}
            redirect={'/nfts'}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Tokens'}
            id={'support-pages'}
            redirect={'/support'}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={' Contact Us'}
            id={'album-pages'}
            redirect={'/album'}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            onClick={handleConnectWallet}
            size="large"
          >
            {walletAddress ? `Wallet Connected: ${walletAddress}` : 'Connect Wallet'}
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
