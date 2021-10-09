import _ from 'lodash'

const usersA = [
    {userId: '1', name: 'Kim'},
    {userId: '2', name: 'Lee'}
]
const usersB = [
    {userId: '1', name: 'Kim'},
    {userId: '3', name: 'Park'}
]

const usersC = usersA.concat(usersB);
console.log('concat', usersC); // {userId: '1', name: 'Kim'}이 두번 나오는 중복값이 존재하는 것을 확인.
/*
concat
(4) [{…}, {…}, {…}, {…}]
0: {userId: '1', name: 'Kim'}
1: {userId: '2', name: 'Lee'}
2: {userId: '1', name: 'Kim'}
3: {userId: '3', name: 'Park'}
length: 4
[[Prototype]]: Array(0)
*/

// 'userId'를 기준으로 중복된 값을 찾고 제거하여 출력
console.log('uniqBy', _.uniqBy(usersC, 'userId'))

/*
uniqBy
(3) [{…}, {…}, {…}]
0: {userId: '1', name: 'Kim'}
1: {userId: '2', name: 'Lee'}
2: {userId: '3', name: 'Park'}
length: 3
[[Prototype]]: Array(0)
*/