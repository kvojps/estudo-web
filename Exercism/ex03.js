export function frontDoorResponse(line) {
    return line.charAt(0)
}
  
export function frontDoorPassword(word) {
    return word[0]+ word.substring(1).toLowerCase()
}
  
export function backDoorResponse(line) {
    let arr = line.split(" ")
    let arrSemEspaco = []
    for (const iterator of arr) {
        if (iterator != '' && iterator != "\t" && iterator != "\n") {
              arrSemEspaco.push(iterator)
        }
    }
    let palavra = arrSemEspaco[arrSemEspaco.length - 1].trim()
    return palavra.charAt(palavra.length - 1)
  }
  
export function backDoorPassword(word) {
    return word[0].toUpperCase() + word.substring(1) + ", please"
}
  