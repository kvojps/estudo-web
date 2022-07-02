export function getFirstCard(deck) {
    return deck[0];
}

export function getSecondCard(deck) {
    return deck[1];
}

export function swapTopTwoCards(deck) {
    swapCards = deck.splice(0,2).reverse();
    return [...swapCards, ...deck]
}

export function discardTopCard(deck) {
    let top = deck.splice(0,1)
    return [top[0], deck]
}

export function insertFaceCards(deck) {
    let top = deck.splice(0,1)
    return [top[0], 'jack', 'queen', 'king', ...deck]
}