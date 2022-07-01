export function dayRate(ratePerHour) {
    return ratePerHour * 8
  }
  
export function daysInBudget(budget, ratePerHour) {
    return parseInt(budget / (ratePerHour*8))
}
  
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    let meses = parseInt(numDays / 22)
    let diasRestantes =  numDays % 22
    let pagamentoCdesconto = Math.ceil(meses * 22 * ratePerHour * 8 * (1 - discount))
    let pagamentoSdesconto = Math.ceil(diasRestantes * ratePerHour * 8)
    return pagamentoCdesconto + pagamentoSdesconto
}
  