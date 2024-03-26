export function createDeck() {
    const suits = ['major', 'cups', 'pentacles', 'wands', 'swords'];
    const minorValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'page', 'knight', 'queen', 'king'];
    const majorValues = ['the fool', 'the magician', 'the high priestess', 'the empress', 'the emperor', 'the hierophant', 'the lovers', 'the chariot', 'justice', 'the hermit', 'wheel of fortune', 'strength', 'the hanged man', 'death', 'temperance', 'the devil', 'the tower', 'the star', 'the moon', 'the sun', 'judgement', 'the world'];
    let deck = [];

    for (let i = 0; i < suits.length; i++) {
        if ( suits[i] === 'major' ) {
            for (let j = 0; j < majorValues.length; j++) {
                const card = {
                    suit: suits[i],
                    value: majorValues[j]
                };
                deck.push(card);
            }
        } else {
            for (let j = 0; j < minorValues.length; j++) {
                const valueName = `${minorValues[j]} of ${suits[i]}`;

                const card = {
                    suit: suits[i],
                    value: valueName
                };
                deck.push(card);
            }
        }
    }

    return deck;
}
