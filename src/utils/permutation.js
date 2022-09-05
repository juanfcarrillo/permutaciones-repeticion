function permutation(conjElems, r, n){
    let conj = []
    function makePerm(permElements, elementos, r, n) {
        if (r == 0) {
            conj.push(elementos);
        }
          else {
            for (let i = 0; i < n; i++) {
                makePerm(permElements, (elementos + permElements[i] + " "), (r - 1), n)
            }
        }
    }
    makePerm(conjElems, "", r, n)
    return new Set(conj)
}

export default permutation