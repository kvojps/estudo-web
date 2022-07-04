export function cardTypeCheck(stack, cardType) {
    const cards =  stack.filter(elem => elem === cardType)
    return cards.length
}

export function determineOddEvenCards(stack, type) {
    if (type == true) {
        stack.filter(elem => elem % 2 == 0)
    } else {
        stack.filter(elem => elem % 2 != 0)
    }

    return stack.length
}