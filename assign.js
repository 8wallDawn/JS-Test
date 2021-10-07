// Object.assign()
var userAge = {
    name : 'Lee',
    age : 25
}

var userEmail = {
    name : 'Lee',
    email : 'dankthedust@gmail.com'
}

var target = Object.assign(userAge, userEmail);
console.log(target)
console.log(userAge)
console.log(target === userAge) // true
//같은 주소와 값을 공유하는 지 확인을 위해서 userAge에 다른 값으로 변경하고 target을 확인해보자
userAge.address = 'Seoul'; // 프로퍼티 동적 생성
console.log(target);
console.log(userAge);
console.log(target === userAge); // true
//객체는 값에 의한 전달이 아닌 참조에 의한 값이 전달 된다.
//원시값인 경우에는 재할당이 되지 않는 특성으로 인해 변수에 새로운 메모리 주소를 참고하는 새 변수를 담는다.
//target과 userAge는 같은 메모리 주소를 값으로 갖는 변수이기 때문에 target의 객체값이 변경되었을 때 그 값을 공유한다.


const a = {name : 'Lee'};
const b = {name : 'Lee'};
console.log(a===b); // false
// b = a 를 하고 일치연산자를 비교해보자!

// 객체를 지정하는 변수는 참조값을 값으로 가지며 그 참조값은 객체의 주소이다.
// 즉 a,b는 다른 참조값을 가지고 있기때문에 일치연산자의 결과가 false이지만
// 같은 참조값을 가지는 target과 userAge는 true의 결과가 나온 것이다 <<확인

/*일치 연산자를 통해 비교한 결과가 target 과 userAge는 true,
a와 b는 false처럼 객체 값이 같음에도 둘의 결과가 다른 이유는 자바스크립트에서 객체는 값을 저장하는 것이 아닌 값을 저장하고 있는 메모리의 주소를 값으로 갖는다.
즉, Object.assign을 통한 결과 값을 담은 target은 userAge와 같은 주소를 참조하는 값을 가졌다는 것을 알 수 있고, 
a와 b는 메모리에 담긴 값은 일치하는 것 같아도 각각 다른 메모리 참조값을 저장했으며, 다른 메모리에 저장된 값이라는 것을 의미한다. */

// 새로운 주소를 가진 객체 데이터를 만들면서 assign()을 사용하는 방법은 새로운 객체 데이터에 userAge와 userEmail을 담아 새로운 변수에 저장하면 된다.
// const target = Object.assign(userAge, userEmail);
const newTarget = Object.assign({}, userAge, userEmail);
console.log(target === newTarget); // false