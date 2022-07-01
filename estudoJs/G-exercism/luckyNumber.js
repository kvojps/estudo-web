export function twoSum(array1, array2) {
    return parseInt(array1.join('')) + parseInt(array2.join(''))
}

export function luckyNumber(number) {
    const reverseNumber =  Number(number.toString().split('').reverse().join(''))

    return number == reverseNumber
}

export function errorMessage(input) {
    if (input == null || input == undefined) {
        return 'required field'
    }

    if (input === input.toString()) {
        return 'Must be a number besides 0'
    }

    return ''
}