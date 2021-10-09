// export를 통해서 특정 함수를 다른 js 내에서도 활용할 수 있도록 하며,
// import를 받는 js는 제공받는 js문서를 명시한다.
export default function random() {
    return Math.floor(Math.random() * 10)
}