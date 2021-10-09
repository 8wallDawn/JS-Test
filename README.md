### Import와 Export를 통한 가져오기, 내보내기

---

프로젝트를 만들면서 많은 js 파일들이 생기게 되는데 특정 js파일에서의 생성한 함수, 변수 등을 다른 js에서도 사용하며 활용할 수 있도록 하는 역할을 import(가져오기), export(내보내기)이 한다.

### Export

`export` 는 JavaScript 모듈에서 함수, 객체, 원시 값을 내보낼 때 사용하며, 내보낸 값은 다른 프로그램에서 `import` 를 통해서 가져가 사용할 수 있다.

내보내지는 모듈은 `"use strict"`와 관계없이 엄격 모드가 적용된다.

- 기본(default) 내보내기
  ```jsx
  // 모듈 내의 선언한 식별자 내보내기
  export { 식별자 as default };

  // 각각의 식별자 내보내기
  export default function () {...};
  export default class {...};
  ```
  모듈(js)에서 기본 내보내기는 하나만 가능하다.
  내보낸 모듈을 어떤 이름으로도 `import` 할 수 있다. 즉 내보낸 모듈의 이름을 가져온 프로그램에서 임의로 설정하여 사용이 가능하다.
  ```jsx
  // exportK.js
  let k;
  export default k = 12;

  // importK.js
  import m from "./exportK"; // exportK.js에서 내보낸 k의 이름을 m으로 변경
  console.log(m); // 12
  ```
- 유명(named) 내보내기
  ```jsx
  // 모듈 내의 선언한 식별자 내보내기
  export { 식별자1, 식별자2} ;

  // 각각의 식별자 내보내기
  export let 식별자1 = 10;
  export function myFunction() {...};
  ```
  하나의 모듈(js)에서 유명 내보내기는 여러 개 존재할 수 있다.
  단, 유명 내보내기는 가져갈 때 내보낸 이름과 동일한 이름을 사용해야 한다.
  식별자가 출동할 경우를 대비하여, 이름 변경이 가능하다.
  ```jsx
  export { 식별자1 as 변경한 식별자, 식별자2 as 변경한 식별자};
  ```
  모듈의 모든 export를 한꺼번에 지정할 목적으로 사용이 가능한데 이러한 기호를 와일드카드(Wildcard Character, \*)이라고 한다.
  ```jsx
  // exportWildCard.js
  export const name = "Lee";
  export const age = "25";
  export const email = "dankthedust@gmail.com";
  export function introduce(name, age, email) {
    return `my name is ${name}, i'm ${age} years old. Please Contact me ${email}`;
  }

  // importWildCard.js
  // 가져온 wildCard의 식별자를 I로 지정
  import * as I from "./exportWildCard";
  // wildCard로 가져온 I 사용
  console.log(I.name, I.age, I.email); //Lee 25 dankthedust@gmail.com
  console.log(I.introduce(I.name, I.age, I.email)); //my name is Lee, i'm 25 years old. Please Contact me dankthedust@gmail.com
  ```
