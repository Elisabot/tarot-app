import React from 'react';
import styled from 'styled-components';
import data from './data.json';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const CardBody = styled.div`
  width: 350px;
  height: 490px;
  border: 2px solid deeppink;
  border-radius: 6px;
  background-color: #343942;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 24px;
`;
const CardText = styled.div`
  font-weight: 100;
  color: lightgrey;

  margin: auto;
`;
const CardEmoji = styled.span`
  font-size: 120px;
`;
// just one card
const card = {
  title: 'The World',
  numeral: 21,
  arcana: 'greater'
};

// just the great arcana
const greatArcana = data.deck.filter(arcana => arcana === 'greaterSecrets');

export function Card(props) {
  return (
    <CardContainer className="card-container">
      <CardBody>
        <CardText>
          <h4>{card.numeral}</h4>
          <h2>{card.title}</h2>
          <CardEmoji role="img" aria-label="emoji">
            🌐
          </CardEmoji>
        </CardText>
      </CardBody>
    </CardContainer>
  );
}
