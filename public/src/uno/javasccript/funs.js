import UnoFuns from './cards';

function RandomCard() {
    let card = '';
    let number = UnoFuns.cards[Math.round(Math.random() * (UnoFuns.cards.length - 1))];
    card = card + number;
    if (!(number === 'w') && !(number === 's')) {
        let colo = UnoFuns.colors[Math.round(Math.random() * (UnoFuns.colors.length - 1))];
        card = card + colo;
    }
    return card;
}

export default RandomCard;