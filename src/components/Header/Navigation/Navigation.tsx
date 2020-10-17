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

const StyledNav = styled.nav`
  width: 100%;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;

  :nth-child(n + 2) {
    margin-left: 20px;
  }
`;
