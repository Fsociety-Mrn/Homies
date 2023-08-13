import { AppBar, Grid, Stack, Toolbar, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-scroll'; // Importing Link from react-scroll

export const Appbar = () => {
  return (
    <div>
      <DesktopAppBar />
    </div>
  );
};

const DesktopAppBar = () => {
  return (
    <div>
      <AppBar position="fixed" 
      color='secondary'
      >
        <Toolbar>
          <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          >

          <Typography variant='h6' noWrap>LOGO</Typography>

            <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            >

              {/* Home Button */}
                <Button color="primary" >
                  <Link to="about" smooth={true} duration={500} >
                    Home
                  </Link>
                </Button>

                
              {/* Projects Button */}
              <Button color="primary">
                  <Link to="about" smooth={true} duration={500}>
                    Projects
                  </Link>
                </Button>

                
              {/* About Button */}
              <Button color="primary">
                  <Link to="about" smooth={true} duration={500}>
                    About
                  </Link>
                </Button>

                
              {/* Contact Button */}
              <Button color="secondary">
                  <Link to="about" smooth={true} duration={500}>
                    Contact
                  </Link>
                </Button>
          
            </Stack>



          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
