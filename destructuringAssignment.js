//구조 분해 할당(Destructuring assignment)
// 비구조화 할당

// 구조분해 할당은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식이다.

const user = {
    name: 'Lee',
    age : 25,
    email : 'dankthedust@gmail.com'
}

// 할당하는 객체의 key값과 객체 변수의 값이 일치하는 경우 할당된다.
var {name, age, email, address} = user;
// E.g, user.adress

// 독립 구문으로 변수에 구조분해를 통해 값을 할당할 때에는 ()를 통해 묶어 주어야 한다.
var name, age, email, address;
({name, age, email, address} = user);

console.log(name); //Lee
console.log(age); //25
console.log(email); //dankthedust@gmail.com
console.log(address); //undefined


// 데이터의 키값을 변경하여 사용하고 싶을 때
var {name, age: old, email, address} = user;
console.log(old); //25


// 데이터의 키값에 대한 할당이 없을 경우에 undefined가 아닌 기본 값을 지정하고 싶을 때
var {name, age, email, address = 'Korea'} = user;
console.log(address); //Korea