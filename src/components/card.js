import React from 'react';
import styled from 'styled-components';

// just one card
const card = {
  title: 'The World',
  numeral: 21,
  arcana: 'greater'
};

// TODO: pass props to card in the gallery component
export function Card() {
  return (
    <CardContainer className="card-container">
      <CardBody>
        <CardText>
          <p>{card.numeral}</p>
          <p>{card.title.toUpperCase()}</p>
          <CardEmoji role="img" aria-label="emoji">
            🌐
          </CardEmoji>
        </CardText>
      </CardBody>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
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
  font-weight: 700;
  color: #eeeeee;

  margin: auto;
`;
const CardEmoji = styled.span`
  font-size: 120px;
`;
