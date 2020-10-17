import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <StyledNav>
      <StyledLink to="/">Главная</StyledLink>
      <StyledLink to="/spells">Заклинания</StyledLink>
    </StyledNav>
  );
};

export default Navigation;

// css

const StyledNav = styled.nav``;

const StyledLink = styled(Link)``;
