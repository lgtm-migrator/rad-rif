import React from 'react';
import styled from 'styled-components';
import { colors, Icon } from '@dotkomonline/design-system';
import Category from '../Category';

const InfoText = styled.p`
  padding: 15px 0px;
  border-width: 1px 0px;
  border-color: ${colors.grayDarken30};
  border-style: solid;
`;

const InformationSection = () => {
  return (
    <Category>
      <InfoText>
        Dette er et interessesjema bla bla bla og vi garantere ingenting bla bla Lorem Ipsum is simply dummy text of the
        printing and typesetting industry.
        <Icon name="accessibility" />
        Dette er en T-pose
        <Icon name="accessibility" />
        Dette er en T-pose
        <Icon name="accessibility" />
        Dette er en T-pose
        <Icon name="accessibility" />
        Dette er en T-pose
      </InfoText>
    </Category>
  );
};

export default InformationSection;
