//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(num) {
    var answer = num % 2 === 0 ? "Even" : "Odd";
    return answer;
}

//정답 2 - chaerin-dev
function solution(num) {
  return num % 2 == 0 ? "Even" : "Odd";
}

//정답 3 - jaewon1676
function solution(num) {
  let answer
  (num % 2 == 0 ? answer = 'Even' : answer = 'Odd') 
  // 삼항 연산자를 사용하여 참일경우 Even, 거짓일 경우 Odd를 반환.
  return answer;
}