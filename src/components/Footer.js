import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

import Logo from "../assets/images/Logo-1-2.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="300px" height="60px" />

        <Typography
          variant="h5"
          sx={{ fontSize: { lg: "25px", xs: "18px" } }}
          mt="41px"
          textAlign="center"
          pb="40px"
        >
          Made with ❤️ by Ali Hamza Rao
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer