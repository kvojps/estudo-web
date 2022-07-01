export function totalBirdCount(birdsPerDay) {
    let acumulador = 0
    for (const iterator of birdsPerDay) {
        acumulador += iterator
    }
    return acumulador
}

export function birdsInWeek(birdsPerDay, week) {
    //não entendi o erro no último teste dessa func usando esse bloco comentado
    // let acumulador = 0
    // let contador = 0
    // for (const key in birdsPerDay) {
    //     if(key >= 7 * (week - 1) &&  contador <= 7) {
    //         acumulador += birdsPerDay[key]
    //         contador += 1
    //     }
    // }
    // return acumulador
    let semana = birdsPerDay.splice((week-1) * 7, 7)
    return totalBirdCount(semana)
}

export function fixBirdCountLog(birdsPerDay) {
    for (let day = 0; day < birdsPerDay.length; day += 2) {
        birdsPerDay[day]++;
    }
    return birdsPerDay
    // let newArr = []
    // for (const key in birdsPerDay) {
    //     if (key % 2 == 0) {
    //         newArr.push(birdsPerDay[key] + 1)
    //     } else {
    //         newArr.push(birdsPerDay[key])
    //     }
    // }
    // return newArr
}
