export function cookingStatus(remainingTime) {
    if (remainingTime == 0) {
        return 'Lasagna is done.'
    }

    else if (remainingTime > 0 ) {
        return 'Not done, please wait.'
    }

    return 'You forgot to set the timer.'
}

export function preparationTime(layers, preparationTime = 2) {
    return layers.length * preparationTime
}

export function quantities(layers) {
    let valueNoodles = 0
    let valueSauce = 0

    for(let layer of layers) {
        if (layer == 'noodles') {
            valueNoodles += 50
        }

        else if (layer == 'sauce') {
            valueSauce += 0.2
        }
    }

    return {
        'noodles' : valueNoodles,
        'sauce' : valueSauce
    }
}

export function addSecretIngredient(friendsList, myList) {
    secretIngredient = friendsList[friendsList.length - 1]
    myList.push(secretIngredient)
}

export function scaleRecipe(recipe, numberOfPortions) {
    let copyRecipe = {}
    for (let ingredient in recipe) {
        copyRecipe[ingredient] = recipe[ingredient] / 2 * numberOfPortions
    }
    return copyRecipe
}