function needsLicense(kind) {
    if (kind == 'car' || kind == 'truck') {
        return true
    }
    return false
}

function chooseVehicle(option1, option2) {
    let arrCar = []
    arrCar.push(option1)
    arrCar.push(option2)
    arrCar.sort()
    return arrCar[0]
}

function calculateResellPrice(originalPrice, age) {
    if (age < 3) {
        return originalPrice * 0.8
    } else if (age >= 3 && age <= 10) {
        return originalPrice * 0.7
    }
    return originalPrice * 0.5
}