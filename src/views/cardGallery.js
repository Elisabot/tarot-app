import React from 'react';
import Card from '../components/card';
import data from '../public/data.json';

// just one card
const card = {
  title: 'The World',
  numeral: 21,
  arcana: 'greater'
};

// just the great arcana
const greatArcana = data.deck.filter(arcana => arcana === 'greaterSecrets');

// the gallery displays all the cards, idk if this layer is necissary
// theoretically this is where we break down data

export function CardGallery(props) {
  return <Card />;
}
