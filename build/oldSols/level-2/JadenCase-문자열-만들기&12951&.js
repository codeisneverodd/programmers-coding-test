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

//정답 4 - RyanDeclan

function solution(s) {
    return s.toLowerCase().split(" ").map(x=>x[0] ? x[0].toUpperCase() + x.substring(1) : "").join(" ");
}

// 이 문제에서 제일 핵심은 "공백문자가 연속해서 나올 수 있습니다." 입니다.  이 부분을 꼭 고려하셔야합니다. 
// 왜냐하면 공백이 연속으로 있으면 split할때 공백이 포함되기에 그 공백이 마침 x[0]이 되어버리면 undefined.toUpperCase()가 되기에 런타임에러가 뜹니다.
// 따라서 저는 풀때 당시 몰랐지만 chartAt()을 사용하는 것도 좋은 방법중 하나라고 생각합니다. 
//그게 아니라 이 코드로 한다면 꼭 undefined인 경우를 처리하는 코드를 추가해줘야합니다.
