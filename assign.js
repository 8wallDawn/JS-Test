// Object.assign()
const userAge = {
    name : 'Lee',
    age : 25
}

const userEmail = {
    name : 'Lee',
    email : 'dankthedust@gmail.com'
}

const target = Object.assign(userAge, userEmail);
console.log(target)
console.log(userAge)
console.log(target === userAge) // true

const a = {name : 'Lee'};
const b = {name : 'Lee'};
console.log(a===b); // false

/*일치 연산자를 통해 비교한 결과가 target 과 userAge는 true,
a와 b는 false처럼 변수 내의 값이 같음에도 둘의 결과가 다른 이유는 자바스크립트에서 변수명은 값을 저장하는 것이 아닌 값을 저장하고 있는 메모리 주소를 담는다.
즉, Object.assign을 통한 결과 값을 담은 target은 userAge와 같은 주소를 지녔다는 것을 알 수 있고, a와 b는 메모리에 담긴 값은 일치하지만 각각 다른 메모리에 값을 저장했다는 것을 의미한다. */

// 새로운 주소를 가진 객체 데이터를 만들면서 assign()을 사용하는 방법은 새로운 객체 데이터에 userAge와 userEmail을 담아 새로운 변수에 저장하면 된다.
// const target = Object.assign(userAge, userEmail);
const newTarget = Object.assign({}, userAge, userEmail);
console.log(target === newTarget); // false
