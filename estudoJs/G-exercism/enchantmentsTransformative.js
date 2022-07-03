export function seeingDouble(deck) {
    return deck.map(i => i*2)
}

export function threeOfEachThree(deck) {
    return deck.reduce((acumulador, elemento) => {
        if (elemento == 3)
            acumulador.push(3,3,3)
        else 
            acumulador.push(elemento)
        return acumulador
    }, [])
}

export function middleTwo(deck) {
    const values = deck.length % 2 == 0 ? [deck[deck.length/2 - 1], deck[deck.length/2]]
     : [Math.ceil(deck.length/2)]

    return values
}

export function sandwichTrick(deck) {
    const fst = deck.shift()
    const last = deck.pop()
    const meio = deck.length/2
    deck.splice(meio, 0, last, fst)
    return deck
}

export function twoIsSpecial(deck) {
    return deck.filter(elem => elem == 2)
}

export function perfectlyOrdered(deck) {
    deck.sort((a, b) => a - b)
}

export function reorder(deck) {
    return deck.reverse()
}