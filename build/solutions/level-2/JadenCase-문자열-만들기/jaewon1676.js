function solution(s) {
    s = s.split(' ').map(el => el.split('').map((el, index) => 
    index == 0 ? el.toUpperCase() : el.toLowerCase()).join('')).join(' ')
    return s;
}
// 문자열을 연습하기에 좋은 문제입니다.
  
// s.split(' ') // 띄어쓰기를 기준으로 나눕니다.
// .map(el => el.split('')) 나눈 덩어리를 다시 요소 하나 하나씩 나눠줍니다 
// .map((el, index) => index == 0 ? el.toUpperCase() : el.toLowerCase())
// 덩어리의 요소가 첫번째이면 대문자, 그렇지 않으면 소문자로 변환 해줍니다.    
// .join('')  작은 배열들을 합쳐줍니다.
// .join(' ') 큰 배열들을 합쳐줍니다.

