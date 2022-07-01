export function timeToMixJuice(name) {
    switch (name) {
      case 'Pure Strawberry Joy':
        return 0.5 
      case 'Energizer':
        return 1.5
      case 'Green Garden': 
        return 1.5
      case 'Tropical Island':
        return 3
      case 'All or Nothing':
        return 5
      default:
        return 2.5
    }
  }
  
export function limesToCut(wedgesNeeded, limes) {
    let limoes = 0
    for (const key in limes) {
        if (wedgesNeeded > 0) {
            if (limes[key] == 'small') {
                wedgesNeeded -= 6
                limoes ++
            } else if (limes[key] == 'medium') {
                wedgesNeeded -= 8
                limoes ++
            } else if (limes[key] == 'large') {
                wedgesNeeded -= 10
                limoes ++
            }
          }
      }
    return limoes
  }
  
  
export function remainingOrders(timeLeft, orders) {
    let index = 0 
    let doableOrderTime = 0
    do {
        doableOrderTime += timeToMixJuice(orders[index])
        index += 1
    } while (doableOrderTime < timeLeft)
    orders.splice(0,index);
    return orders
  }
  