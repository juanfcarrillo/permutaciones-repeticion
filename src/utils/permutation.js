function factorial(n) {
    let nFactorial = 1;
    for (let i = 1; i <= n; i++) {
        nFactorial *= i;
    }
    return nFactorial;
}

function permutation (conjElems) {
    var set =[];
    function permute (arr, data) {
        var cur, memo = data || [];
        
        for (var i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1)[0];
            if (arr.length === 0) set.push(memo.concat([cur]));
            permute(arr.slice(), memo.concat([cur]));
            arr.splice(i, 0, cur);
        }
        return set;
   }
   return new Set(permute(conjElems).map(elem => elem.join("")));
}

export function numberPermutation(permElements){
    let hashElems = {}
    permElements.map(elem => hashElems[elem] !== undefined ? hashElems[elem]++ : hashElems[elem] = 1)
    const divisor = Object.values(hashElems).reduce((acc, elem) => acc*(factorial(elem)))
    const dividend = factorial(permElements.length)
    return dividend/divisor
}

export default permutation