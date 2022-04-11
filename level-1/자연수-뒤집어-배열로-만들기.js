//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
    var answer = [];
    n = n.toString()
    for (let i = 0; i < n.length; i++) {
        answer[i] = Number(n[n.length - 1 - i])
    }
    return answer;
}

//정답 2 - chaerin-dev
function solution(n) {
  // 숫자 -> 문자열 -> 배열 -> 뒤집기 -> 모든 원소에 대해 자연수로 형 변환
  return String(n)
    .split("")
    .reverse()
    .map((item) => parseInt(item));
}

//정답 3 - jaewon1676
function solution(n) {
    var answer = [];
    // 정수형 => 문자형 => 하나씩 잘라서 뒤집어서 모아준다.
    n = n.toString().split('').reverse().join('')
    for (let i=0; i<n.length; i++){
        answer.push(parseInt(n[i])) // n은 지금 문자형이기때문에 Push 하기전에 정수형으로 바꿔줌
        // answer.push(n[i]) 로 해주면 현재 n[i]는 문자형이기때문에 결과는 ["5","4","3","2","1"] 가 됩니다.
        // answer(parseInt(n[i])) 로 해준다면 n[i]는 문자형 => 정수형으로 변하기 때문에 결과는 [5, 4, 3, 2, 1] 가 됩니다.
        // 문자형과 정수형의 차이는 숫자에 큰 따옴표가 있느냐 없느냐의 차이입니다.
    }
    return answer
  }
  
  //정답 4 - jaewon1676
  function solution(n) {
    return n = n.toString().split('').reverse().map(o => o = parseInt(o));
  }