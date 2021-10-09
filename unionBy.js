import _ from 'lodash'

const usersA = [
    {userId: '1', name: 'Kim'},
    {userId: '2', name: 'Lee'}
]
const usersB = [
    {userId: '1', name: 'Kim'},
    {userId: '3', name: 'Park'}
]

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD);
/* 
unionBy 
(3) [{…}, {…}, {…}]
0: {userId: '1', name: 'Kim'}
1: {userId: '2', name: 'Lee'}
2: {userId: '3', name: 'Park'}
length: 3
[[Prototype]]: Array(0)
*/