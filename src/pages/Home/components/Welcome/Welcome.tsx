import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Welcome = (): JSX.Element => {
  const theme = useTheme();

  const GridItemHeadlineBlock = () => (
    <Box>
      <Typography
        variant="h3"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 900,
        }}
      >
        GM, Wanna get rich fast?
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        align={'center'}
        sx={{
          fontWeight: 400,
        }}
      >
        Welcome to getRichFast.com!
        <br /> Let's Ducking Goooooooo! - Your most reliable Tokenized Investment Service
      </Typography>
    </Box>
  );

  const GridItemPartnersBlock = () => (
    <Box display="flex" flexWrap="wrap" justifyContent={'center'} width={1}>
      <Box maxWidth={80} width={1} marginTop={2} marginRight={4}>
        <Box
          component="img"
          height={1}
          width={1}
          src={'./solana.png'}
          alt="..."
          sx={{
            filter:
                theme.palette.mode === 'dark'
                  ? 'brightness(0) invert(0.7)'
                  : 'contrast(0) brightness(0)',
          }}
        /> 
       
      </Box>
    </Box>
  );

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent={'center'}
          >
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent={'center'}
          >
            <GridItemPartnersBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;
