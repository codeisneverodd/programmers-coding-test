//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(s) {
    var answer = ''
    answer = s.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ')
    //word[0]은 빈 문자열을 만나면 undefined를,  word.charAt(0)은 빈 문자열을 만나면 빈 문자열을 반환한다.
    return answer;
}

//정답 2 - jaewon1676
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

//정답 3 - yongchanson
function solution(s) {
  let answer = [];
  s = s.split(" ");

  for (let i = 0; i < s.length; i++) {
    answer.push(
      s[i].substring(0, 1).toUpperCase() + s[i].substring(1).toLowerCase()
    );
  }
  return answer.join(" ");
}
