import _ from 'lodash'

//객체 타입의 깊은 복사(Deep copy)와 얕은 복사(Shallow copy)
const user = {
    name : ['Lee'],
    age : 25,
    email : ['dankthedust@gmail.com']
}
//const copyUser = user; 같은 메모리 공간의 주소가 복사되어 같은 메모리 공간에 저장된 값을 공유하게 되어 서로 영향을 주게 됨.
//console.log(copyUser === user); true

//1. Object.assign()을 이용한 얕은 복사
var copyUser = Object.assign({}, user) // 새로운 빈 객체를 생성하고 병합하여 copyUser에게 할당
console.log(copyUser === user); //false

//2. 전개 연산자(spread)를 이용한 얕은 복사
var copyUser = {...user};
console.log(copyUser === user); //false

user.name.push('Kim');
console.log(user.name === copyUser.name) // true 인 이유는 user내의 name또한 배열로 참조형 데이터 이다.
// user의 name을 복사 된것이 아니기 때문에 user내의 name은 동일한 주소를 공유하고 있다.
console.log('user', user);
console.log('copyUser', copyUser);

/*
1. JSON.stringify()를 이용한 복사
객체를 문자열로 변환하여 복사하면 원시값을 복사하는 것이므로 깊은 복사처럼 활용이 가능하다.
단, 속도가 느리고 함수의 경우 undefined로 반환되는 문제가 있다.
var copyUser = JSON.parse(JSON.stringify(user));
user.email.push('newEmail@gmail.com');
console.log(user.email === copyUser.email); // false
*/

/*
2. 재귀 함수를 이용한 복사
function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    let copy = []; // 단, 이 부분으로 인하여 재귀함수이기에 반환되는 copyUser의 데이터 타입이 배열과 객체로 변경된다.
    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }
    return copy;
}

var copyUser = deepCopy(user);
user.email.push('newEmail@gmail.com');
console.log(user.email === copyUser.email);
console.log(user)
console.log(copyUser) // 깊은 복사가 되었으나 let copy = [] 로 인하여 객체였던 user가 배열로 바뀌어 copyUser에게 반환된것을 확인할 수 있다.
*/

/*
3. 깊은 복사의 경우 lodash의 cloneDeep을 사용하여 간편하게 복사가 가능하다.
var copyUser = _.cloneDeep(user);
console.log(copyUser === user); // false
user.email.push('newEmail@gmail.com');
console.log(user.email === copyUser.email); // false
console.log(user)
console.log(copyUser)
*/