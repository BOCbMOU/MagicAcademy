import React from 'react';
import styled from 'styled-components';
import AddSpell from '../../components/Body/AddSpell/AddSpell';
import Header from '../../components/Header/Header';
import { PageBackground } from '../Page.styles';

const Spells = () => {
  return (
    <Background>
      <Header />
      <AddSpell />
    </Background>
  );
};

export default Spells;

// css

const Background = styled(PageBackground)``;
