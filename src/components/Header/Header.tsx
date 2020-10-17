import React from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <Background>
      <Navigation />
    </Background>
  );
};

export default Header;

// css

const Background = styled.div``;
