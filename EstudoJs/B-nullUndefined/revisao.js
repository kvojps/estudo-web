function getVogais(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
        return 0;
    }
    return m.length;
}

typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null  == null        // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true

