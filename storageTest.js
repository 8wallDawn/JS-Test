const my = {
    name: "Lee",
    age: 25,
    emails : [
        'dankthedust@gmail.com',
        '8wall_dawn@kakao.com'
    ]
}

//lcoalStorage 에 데이터 저장하기
//my는 object로 로컬 Storage에서 저장할 수 없다. 때문에 string 타입으로 변환하여야 한다.
//localStorage.setItem('user', my); 
localStorage.setItem('user', JSON.stringify(my));

//localStorage 에서 데이터 불러오기
//로컬 Storage에 저장된 데이터는 string 타입이므로 불러온 데이터를 활용하기 위해서는 변환이 필요하다.
console.log(typeof localStorage.getItem('user')); // string
console.log(typeof JSON.parse(localStorage.getItem('user'))); // object

//localStorage 에서 데이터 수정하기
//로컬 Storage는 하나의 key에 하나의 value가 쌍으로 이룬다.
//즉, 로컬 Storage에 저장된 특정 key의 value를 수정할 때에는 데이터를 불러와 수정 후 재할당을 통해 수정한다.
const myAgeChange = JSON.parse(localStorage.getItem('user'));
myAgeChange.age = 22;
localStorage.setItem('user', JSON.stringify(myAgeChange));

//localStorage 에서 데이터 삭제하기
//삭제하고자 하는 특정 데이터의 key값을 명시하여 삭제한다.
localStorage.removeItem('user');