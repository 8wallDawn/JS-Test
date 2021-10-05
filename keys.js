const user = {
    name : 'Lee',
    age : 25,
    email : 'dankthedust@gmail.com'
}

const keys = Object.keys(user);
//객체의 키들을 값으로 가진 배열을 반환
console.log(keys);
// ['name', 'age', 'email']

//특정한 키의 값을 반환
console.log(user['email']);
// dankthedust@gmail.com

//객체의 각 키들의 값들을 배열로 반환
const values = keys.map(key => user[key]);
console.log(values);
// ['Lee', 25, 'dankthedust@gmail.com']