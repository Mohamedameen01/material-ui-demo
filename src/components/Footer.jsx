import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
      <Container maxWidth="lg" sx={{py:3}}>
        <Typography variant="h6" align="center" padding={1}>
          Footer
        </Typography>
        <Typography variant="body1" align="center">
          Something here to give the footer a purpose!
        </Typography>
        <Typography variant="body2" align="center">
          Copyright © {' '}
          <Link color='inherit'>
            Your Website 
          </Link>
           {' '} 2024.
        </Typography>
      </Container>
    
  );
}

export default Footer;
