let max = (a, b) => a > b ? a : b

var arr = [5,6,13,0,1,18,23]

var sum = arr.reduce((a, b) => a + b)

var even = arr.filter(v => v % 2 == 0)

var double = arr.map(v => v * 2)
