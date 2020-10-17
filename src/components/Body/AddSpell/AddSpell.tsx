import React, { useState } from 'react';
import styled from 'styled-components';
import { stylesSet } from '../../../constants/StylesSet';

const AddSpell = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <StyledDiv>
      <Block>
        <BlockTitle>Название</BlockTitle>
        <StyledInput
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </Block>
      <Block>
        <BlockTitle>Описание</BlockTitle>
        <StyledTextarea
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </Block>
    </StyledDiv>
  );
};

export default AddSpell;

// css

const StyledDiv = styled.div`
  width: calc(100% - 80px);
  margin: 10px 20px;
  padding: 10px 20px;

  background: ${stylesSet.color.headerBackground};
`;

const Block = styled.div`
  display: grid;
  margin: 0 auto;
  padding: 5px 0;
`;

const BlockTitle = styled.h3`
  margin-bottom: 4px;

  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
`;

const StyledInput = styled.input`
  border: 1px solid ${stylesSet.color.body};
  padding: 4px 5px;

  background: ${stylesSet.color.pageBackground};

  color: ${stylesSet.color.defaultText};
  font-family: inherit;
  font-size: 14px;

  transition: border 50ms linear;

  :focus {
    border-color: ${stylesSet.color.main};
  }
`;

const StyledTextarea = styled(StyledInput).attrs({ as: 'textarea' })`
  position: relative;
  justify-self: stretch;
  height: 60px;
`;
