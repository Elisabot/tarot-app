import React from 'react';
import styled from 'styled-components';

export function Card(props) {
  return (
    <CardContainer className="card-container">
      <CardBody>
        <CardText>{props.title}</CardText>
      </CardBody>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  margin: 24px;
`;

const CardBody = styled.div`
  width: 350px;
  height: 490px;
  border: 2px solid deeppink;
  border-radius: 6px;
  background-color: #343942;
`;
const CardText = styled.div`
  font-family: 'Droid Sans';
  font-weight: normal;
  color: light-grey;
`;

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

// lol idk what you're up to here but get some sleep
export const greatArcana = data.deck.filter(arcana => arcana === 'greater secrets');

