// 기본(default) 가져오기
import getType from './exportGetType'
import ran from './exportGetRandom'

// 유명(named) 가져오기
import {plus as sum,minus,multiple,division} from './exportNamedCalc'
    // 가져온 wildCard의 식별자를 I로 지정
import * as I from './exportWildCard'

console.log(getType([1,2,3]));
//기본 내보내기로 가져온 함수 getRandom => ran
console.log(ran(), ran());

var a = 10;
var b = 2;
// exportNamedCalc.js 에서 plus,minus,multiple,division 함수를 가져오기
// 가져온 plus 함수를 sum 이라는 식별자 명으로 변경하여 사용하기
console.log(sum(a,b), minus(a,b), multiple(a,b), division(a,b));

// wildCard로 가져온 I 사용
console.log(I.name, I.age, I.email);
console.log(I.introduce(I.name, I.age, I.email));