import React from 'react';
import styled from 'styled-components';

export function Card(props) {
  console.log(greatArcana)
  return (
    <CardContainer className="card-container">
      <CardBody>
        <CardText>
        <h4>{card.numeral}</h4>
        <h2>{card.title}</h2>
        <CardEmoji>🌐</CardEmoji>
        </CardText>
      </CardBody>
    </CardContainer>
  );
}

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
  flex-direction: row;
  justify-content: center;
  margin-bottom: 24px;
`;
const CardText = styled.div`
  font-family: 'Mali';
  font-weight: normal;
  color: lightgrey;

  margin: auto;
`;
const CardEmoji = styled.div`
  font-size: 120px;
`
// just one card 
let card = {
  title: 'The World',
  numeral: 21,
  arcana: 'greater'
}
// some mock json data with deck boundaries
const data = {
  deck: [
    ('greater secrets': [
      {
        title: 'The Fool',
        numeral: 0
      },
      {
        title: 'The World',
        numeral: 21
      }
    ]),
    ('lesser secrets': [
      {
        title: 'one of',
        numeral: 1,
        suite: 'cups'
      },
      {
        title: 'King of',
        numeral: 15,
        suite: 'cups'
      }
    ])
  ]
};

const greatArcana = data.deck.filter(arcana => arcana === 'greater secrets');

