const { assign } = require('lodash');
const a = {name:1}
const b = assign(a,{name:2})
console.log(b.name)
console.log(a.name)

const c = {name:3,age:10}
const e = {name:4}
const d = {...c, ...e}
const f = assign({},c,e)
console.log(c)
console.log(d)
console.log(e)
console.log(f)

