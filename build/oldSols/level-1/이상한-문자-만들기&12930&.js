//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char, index) =>
          index % 2 === 0
            ? word[index].toUpperCase()
            : word[index].toLowerCase()
        )
        .join("")
    )
    .join(" ");
}

//정답 2 - chaerin-dev
// 원래 문자가 모두 소문자여야 할 이유는 없다는 사실, 공백이 하나 이상일 수 있다는 사실을 빠뜨려서 조금 오래 생각한 문제..!
function solution(s) {
  let result = "";
  let flag = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      flag = false;
      result += s[i];
    } else if (flag) {
      result += s[i].toUpperCase();
    } else {
      result += s[i].toLowerCase();
    }
    flag = !flag;
  }
  return result;
}

//정답 3 - jaewon1676
function solution(s) {
  return s
    .split(" ")
    .map((el) =>
      el
        .split("")
        .map((el, index) =>
          index % 2 == 0 ? el.toUpperCase() : el.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}

/* s.split(' ') // 띄어쓰기를 기준으로 나눕니다. [ 'try', 'hello', 'world' ]
  
.map(el => el.split('')) 나눈것을 기준으로 요소 하나 하나씩 나눠줍니다 
[[ 't', 'r', 'y' ], [ 'h', 'e', 'l', 'l', 'o' ], [ 'w', 'o', 'r', 'l', 'd' ]]
  
.map((el, index) => index % 2 == 0 ? el.toUpperCase() : el.toLowerCase())
//map에서 첫번째는 앞에서 가져온 요소, 두번째는 index를 반환 합니다!
//map의 index를 기준으로 짝수인지 홀수인지 판별하여 대문자, 소문자로 변환 해줍니다.
[[ 'T', 'r', 'Y' ], [ 'H', 'e', 'L', 'l', 'O' ], [ 'W', 'o', 'R', 'l', 'D' ]]
    
.join('')  작은 배열들을 합쳐줍니다.
['TrY', 'HeLlO', 'WoRlD']
    
.join(' ') 큰 배열들을 합쳐줍니다.
"TrY HeLlO WoRlD"

대, 소문자 변환, split, reverse, join, map 등등을 활용 해야 하므로  
문자열을 연습하는데 좋은 문제입니다.
*/


//정답 4 - prove-ability
function solution(s) {
  let answer = '';
  s.split(" ").forEach((word) => {
      for(let i = 0, len = word.length; i < len; i++) {
          if(i % 2 === 0) answer+=word[i].toUpperCase();
          else answer+=word[i].toLowerCase();
      }
      answer += " ";
  })
  answer = answer.slice(0, answer.length - 1)
  return answer;
}
