
var createBase = function(base) {
    return function(x) {
        return x + base
    }
}

var addSix = createBase(6)
console.log(addSix(1))