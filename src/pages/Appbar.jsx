
import React from 'react';
import { 
  AppBar, 
  Grid, 
  Stack, 
  Toolbar, 
  Button, 
  Typography, 
  IconButton,
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';

import { menuButtonCSS } from '../Components/CustomeButton';
import { Link } from 'react-scroll'; // Importing Link from react-scroll

// icons
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';

export const Appbar = () => {

  const [state, setState] = React.useState(false);
  React.useEffect(()=>{
      const setResponsiveness = () => {
          return window.innerWidth < 700 ? setState(true) : setState(false);
      };
  
      setResponsiveness();
          window.addEventListener("resize", () => setResponsiveness());
      return () => {
          window.removeEventListener("resize", () => setResponsiveness());
      };
  },[])  

  return (
    <div>
      {state ? <MobileAppBar />  : <DesktopAppBar />} 
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
          paddingLeft={6}>

            <Grid item xs={12} md={4} sm={4}>
              <Typography variant='h6' noWrap><strong>LOGO</strong></Typography>
            </Grid>

            <Grid item xs={12} md={7} sm={7}>
              <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={1}>

              {/* Home Button */}
                <Button color="primary" variant='text' sx={menuButtonCSS}>
                  <Link to="home" smooth={true} duration={500} >
                    <strong>Home</strong>
                  </Link>
                </Button>

                
              {/* Projects Button */}
                <Button color="primary" variant='text' sx={menuButtonCSS}>
                  <Link to="projects" smooth={true} duration={500}>
                    <strong>Projects</strong>
                  </Link>
                </Button>

                
              {/* About Button */}
                <Button color="primary" variant='text' sx={menuButtonCSS}>
                  <Link to="about" smooth={true} duration={500}>
                    <strong>About</strong>
                  </Link>
                </Button>

                
              {/* Contact Button */}
                <Button color="primary" variant='text' sx={menuButtonCSS}>
                  <Link to="contact" smooth={true} duration={500}>
                    <strong>Contact</strong>
                  </Link>
                </Button>
          
              </Stack>
            </Grid>


          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const MobileAppBar = (props) => {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (<div>
    <AppBar
    color='secondary'
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${240}px)` },
          ml: { sm: `${240}px` },
        }}
      >
        <Toolbar>
  
        <Typography variant="h6"  noWrap sx={{ flexGrow: 1 }} component="div">
            LOGO
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ...(mobileOpen && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
              anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>

        </Box>
  </div>)
}
