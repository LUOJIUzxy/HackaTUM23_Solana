import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
  // pages: {
  //   landings: Array<PageItem>;
  //   company: Array<PageItem>;
  //   account: Array<PageItem>;
  //   secondary: Array<PageItem>;
  //   blog: Array<PageItem>;
  //   portfolio: Array<PageItem>;
  // };
  colorInvert?: boolean;
}

const Topbar = ({
  onSidebarOpen,
  // pages,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  // const {
  //   landings: landingPages,
  //   secondary: secondaryPages,
  //   company: companyPages,
  //   account: accountPages,
  //   portfolio: portfolioPages,
  //   blog: blogPages,
  // } = pages;

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
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
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
            href="/home"
            size="large"
          >
            Connect Wallet
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
