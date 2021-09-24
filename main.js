import getType from './getType'

console.log(typeof "hello world") // String
console.log(typeof 123) // Number
console.log(typeof NaN) // Number
console.log(typeof true) // Boolean
console.log(typeof undefined) // Undefined
console.log(typeof null) // Object
console.log(typeof {}) // Object
console.log(typeof []) // Object

/* getType.js 로 부터 import
function getType(data){
    // return Object.prototype.toString.call(data)
    return Object.prototype.toString.call(data).slice(8,-1)
}
*/
console.log(getType(123)) // Number
console.log(getType(NaN)) // Number
console.log(getType(false)) // Boolean
console.log(getType(null)) // null
console.log(getType({})) // Object
console.log(getType([])) // Array
/* 기본 제공되는 함수인 typeof console.log(typeof []) 와는 다른 결과로
별도의 getType()과 같은 함수를 만들어 명확한 타입을 확인할 수 있으며, 더욱 정확하다. */