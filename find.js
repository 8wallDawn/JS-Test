import _ from 'lodash'

const users = [
    {userId: '1', name: 'Lee'},
    {userId: '2', name: 'Kim'},
    {userId: '3', name: 'Park'},
    {userId: '4', name: 'Choi'},
    {userId: '5', name: 'Jung'}
]

// find()
// {name: 'Park'} 인 프로퍼티 출력
const foundUser = _.find(users, {name: 'Park'})
console.log(foundUser); // {userId: '3', name: 'Park'}

// findIndex()
// {name: 'Choi'} 인 프로퍼티의 인덱스 값 출력
const foundUserIndex = _.findIndex(users, {name: 'Choi'})
console.log(foundUserIndex); // 3

// remove()
// {name: 'Kim'} 인 프로퍼티 값 제거
_.remove(users, {name: 'Kim'})
console.log(users); // (4) [{...}, {...}, {...}, {...}]