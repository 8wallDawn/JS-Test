## Lodash

---

### Lodash 사용법

---

[Lodash](https://lodash.com/)

Lodash 공식 홈페이지에서 Documentation 에서 사용가능한 함수들의 예제를 확인할 수 있다.

### lodash 설치

---

1. CDN 설치

[lodash.js - Libraries - cdnjs - The #1 free and open source CDN built to make life easier for developers](https://cdnjs.com/libraries/lodash.js)

1. npm을 통한 설치

   터미널에서 `$ npm i lodash` 을 통해서 lodash를 설치하고

   `import _ frin 'lodash'` 를 통해서 사용한다.

### 자주 활용되는 함수

---

1. `_.throttle(함수, 시간)` - 일정 시간에 한번씩 실행되도록 제한하는 메소드

   ```jsx
   window.addEventListener(
     "scroll",
     _.throttle(
       function () {
         /*function*/
       } /*time*/
     )
   );
   ```

1. `_.uniqBy(중복값이 존재하는 변수, 중복제거의 기준값)`

   ```jsx
   import _ from "lodash";

   const usersA = [
     { userId: "1", name: "Kim" },
     { userId: "2", name: "Lee" },
   ];
   const usersB = [
     { userId: "1", name: "Kim" },
     { userId: "3", name: "Park" },
   ];

   const usersC = usersA.concat(usersB);
   ```

   에서 usersC은 `concat()` 으로 병합되어 반환된 값을 가지지만 내부에는 중복값 `{userId: '1', name: 'Kim'}`이 존재한다.

   이때, 어떠한 기준을 통해서 중복된 값을 제거해주는 lodash 메소드가 `uniqBy()`다.

   ```jsx
   console.log("uniqBy", _.uniqBy(usersC, "userId"));
   ```

   다음과 같이 `'userId'`를 기준으로 중복된 값을 찾고 제거할 수 있다.

1. `_.unionBy(중복값이 존재하는 변수, 중복제거의 기준값)`

   ```jsx
   import _ from "lodash";

   const usersA = [
     { userId: "1", name: "Kim" },
     { userId: "2", name: "Lee" },
   ];
   const usersB = [
     { userId: "1", name: "Kim" },
     { userId: "3", name: "Park" },
   ];
   ```

   마찬가지로 2에서 확인하듯 단순히 usersA와 usersB를 병합하면 내부에는 중복값 `{userId: '1', name: 'Kim'}`이 존재한다.

   중복값을 `'userId'` 를 기준으로 중복값을 제거하면서 병합하여 반환하는 메소드가 `unionBy()`이다.

   ```jsx
   const usersD = _.unionBy(usersA, usersB, "userId");
   console.log("unionBy", usersD);
   ```

1. `_.find(*obj*, *value*)`

   특정 값을 통해서 obj 내의 특정 프로퍼티를 찾아내는 메소드이다. `_.findIndex()`를 통해서 index 번호를 알아 낼 수도 있다.

   ```jsx
   import _ from "lodash";

   const users = [
     { userId: "1", name: "Lee" },
     { userId: "2", name: "Kim" },
     { userId: "3", name: "Park" },
     { userId: "4", name: "Choi" },
     { userId: "5", name: "Jung" },
   ];

   // find()
   // {name: 'Park'} 인 프로퍼티 출력
   const foundUser = _.find(users, { name: "Park" });
   console.log(foundUser); // {userId: '3', name: 'Park'}

   // findIndex()
   // {name: 'Choi'} 인 프로퍼티의 인덱스 값 출력
   const foundUserIndex = _.findIndex(users, { name: "Choi" });
   console.log(foundUserIndex); // 3
   ```

1. `_.remove(*obj*, *value*)`

   특정 값을 통해서 obj 내의 특정 프로퍼티를 찾아 제거한다.

   ```jsx
   import _ from "lodash";

   const users = [
     { userId: "1", name: "Lee" },
     { userId: "2", name: "Kim" },
     { userId: "3", name: "Park" },
     { userId: "4", name: "Choi" },
     { userId: "5", name: "Jung" },
   ];

   // remove()
   // {name: 'Kim'} 인 프로퍼티 값 제거
   _.remove(users, { name: "Kim" });
   console.log(users); // (4) [{...}, {...}, {...}, {...}]
   ```
