import myData from './myData.json'

console.log(typeof myData);

const user = {
    name: 'Lee',
    age: 25,
    emails: [
        'dankthedust@gmail.com',
        '8wall_dawn@kakao.com'
    ]
}
console.log('user', user)

const str = JSON.stringify(user)
console.log('str', str);
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj);