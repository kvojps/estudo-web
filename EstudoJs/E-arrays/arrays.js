let frutas = ["maça", "banana"]
let frutas2 = ["laranja, maçã"]

frutas.indexOf('banana') //1
frutas.includes('goiaba') //false
frutas.push('goiaba') //["maça", "banana", "goiaba"]
frutas.pop() //["maça", "banana"]
frutas.concat(frutas2) //["maça", "banana", "laranja", "maça"]
frutas.splice(0) //todos os elementos a partir do indice 0 são eliminados -> []
frutas.unshift("morango") //add elemento no index 0 -> ["morango"]
frutas.forEach(function(item, indice, array) {
    item, indice, array
})

let arrNum = [1,2,3,4,5]
arrNum.copyWithin(0,3) //4,5,3,4,5
//target, start, end
arrNum.copyWithin(0, 3, 4) // 4,2,3,4,5
arrNum.copyWithin(0,2) //3,4,5,4,5




