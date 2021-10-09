## JSON

JSON은 속성과 값으로 쌍을 이루는 데이터 포맷으로, 비동기 브라우저/서버 통신(AJAX)를 위해 넓게는 XML을 대체한다.

특히, 인터넷에서 자료를 주고 받을 때 그 자료를 표현하는 방법으로 알려져 있다.

JSON파일은 하나의 문자데이터이나, JavaScript에서 데이터 값을 불러와지면서 그 파일의 자료형이 해석되어 사용된다.

```json
// myData.json
{
  "name": "Lee",
  "age": 25,
  "emails": ["dankthedust@gmail.com", "8wall_dawn@kakao.com"]
}
```

```jsx
import myData from "./myData.json";

console.log(typeof myData); // Object

const user = {
  name: "Lee",
  age: 25,
  emails: ["dankthedust@gmail.com", "8wall_dawn@kakao.com"],
};

// user를 string(문자열) 데이터로 변환
const str = JSON.stringify(user);
// 출력되는 str의 값이 myData.json과 동일한 것을 알 수 있다.
console.log(str); // {"name":"Lee","age":25,"emails":["dankthedust@gmail.com","8wall_dawn@kakao.com"]}
```

즉, 위의 예제에서처럼 json은 하나의 문자데이터이지만 형식에 따라 자료형이 해석되어 변형된다.

json이 문자데이터인 이유는 데이터 통신이 무겁지 않게 이루어 지도록 하기 위함이며,

따라서 `JSON.stringify(value)`는 통신하고자 하는 자료를 문자데이터 변환하고자 할 때 사용되고 `JSON.parse(value)`는 사용하고자 하는 자료를 parse(분석하다)하여 javaScript 내에서 활용할 수 있도록 하는 메소드이다.

## JSON의 기본 자료형

---

- 수 (Number)
- 문자열 (String) 문자열은 큰 따옴표(")로만 구분하며 역슬래시 [이스케이프 문법](https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%94%84_%EB%AC%B8%EC%9E%90)을 지원한다.
  즉, 배열이나 객체내의 문자열은 모두 큰 따옴표로 묶여 있어야한다.
- Boolean(참 거짓 값)
- 배열(Array)
- 객체(Object)
- null

## Storage의 개념(local, session)

### window.localStorage

---

`localStorage`는 페이지가 닫혀도 사라지지 않는 반 영구적 브라우저 내의 저장소다.

("사생활 보호 모드" 중 생성한 `localStorage` 데이터는 마지막 "사생활 보호" 탭이 닫힐 때 지워진다.)

`localStorage`에 저장한 자료는 **페이지 프로토콜별로 구분**하며, 같은 페이지의 HTTP와 HTTPS는 다른 `localStorage`에 저장된다.

- 로컬 Storage 객체에 접근하여 값 추가 및 할당

  ```jsx
  //localStorage.setItem('key','value');
  localStorage.setItem("myCat", "Tom");

  const cat = localStorage.getItem("myCat");
  ```

- 제거
  ```jsx
  //localStorage.removeItem('key');
  localStorage.removeItem("myCat");
  ```
- localStorage 내의 항목 전체 제거
  ```jsx
  localStorage.clear();
  ```
- localStorage 데이터 수정
  localStorage는 key와 value의 쌍으로 이루어진 포맷으로 하나의 key는 하나의 value만을 갖는다.
  즉, localStorage의 데이터 값을 수정할 때에는 데이터를 불러와 수정 후 재할당을 통해서 수정이 가능하다.

  ```jsx
  localStorage.setItem("myCat", "Jerry");

  let cat = localStorage.getItem("myCat");
  cat = "Tom";

  localStorage.setItem("myCat", cat);
  ```

### window.sessionStorage

---

`sessionStorage`는 페이지가 닫히면 동시에 사라지는 브라우저 내의 저장소다.

`sessionSotrage`의 특성으로

- 페이지 세션은 브라우저가 열려있는 한 새로고침과 페이지 복구를 거쳐도 남아있는다.
- **페이지를 새로운 탭이나 창에서 열면, 세션 쿠키의 동작과는 다르게 최상위 브라우징 맥락의 값을 가진 새로운 세션을 생성한다.**
- 같은 URL을 다수의 탭/창에서 열면 각각의 탭/창에 대해 새로운 `sessionStorage`를 생성한다.
- 탭/창을 닫으면 세션이 끝나고 `sessionStorage` 안의 객체를 초기화한다.

`localStorage`와 동일하게 저장한 자료는 **페이지 프로토콜별로 구분**한다.
