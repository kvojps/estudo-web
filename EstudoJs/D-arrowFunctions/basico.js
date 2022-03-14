const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
]

console.log(materials.map(material => material.length))

//Comparando Arrow functions com funções
function somaA (a) {
    return a + 100
}

//a => a + 100
(a, b) => a + b + 100;

(a,b) => {
    let chuck = 42;
    return a + b + chuck
}
