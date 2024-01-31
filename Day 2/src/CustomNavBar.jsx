import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Avatar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';
import { useSpring, animated } from 'react-spring';

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Add some styles for the navbar
const StyledAppBar = styled(AppBar)({
  backgroundColor: '#fff', // White background
  boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)', // Subtle box shadow
});

// Animated typography with fade-in animation
const AnimatedTypography = styled(animated(Typography))({
  flexGrow: 1,
  textAlign: 'center',
  '&:hover': {
    textDecoration: 'none',
    color: 'black',
    animation: `${fadeIn} 0.5s ease-in`, // Apply fade-in animation on hover
  },
  color: 'black',
});

const StyledButton = styled(Button)({
  color: 'black',
  '&:hover': {
    color: '#e74c3c', // Change the color on hover
  },
});

const NavbarAD = () => {
  // React Spring animations
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // State for the dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);

  // Open the dropdown menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the dropdown menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Link to="/home">
          <AnimatedTypography variant="h6" style={springProps}>
            <StyledButton color="inherit">Explore</StyledButton>
          </AnimatedTypography>
        </Link>

        {/* Center Section */}
        <AnimatedTypography variant="h6" style={springProps}>
          <Link to="/about">
            <StyledButton color="inherit">About Us</StyledButton>
          </Link>
          <Link to="/Book">
            <StyledButton color="inherit">Book Now</StyledButton>
          </Link>
          <Link to="/Service">
          <StyledButton color="inherit">Our Services</StyledButton>
          </Link>
          <Link to="/Booked1">
    <StyledButton color="inherit">Enrolled</StyledButton>
  </Link>
        </AnimatedTypography>

        {/* Right Section */}
        <AnimatedTypography sx={{ marginLeft: 'auto' }} style={springProps}>
          {/* User Profile Dropdown */}
          <div>
            <Button
              color="inherit"
              aria-controls="profile-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <Avatar sx={{ width: 32, height: 32, marginRight: '5px' }}>
                {/* You can use the user's profile picture here */}
                U
              </Avatar>
              User
            </Button>
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/profile">User Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/">Logout</Link>
              </MenuItem>
            </Menu>
          </div>
        </AnimatedTypography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavbarAD;
