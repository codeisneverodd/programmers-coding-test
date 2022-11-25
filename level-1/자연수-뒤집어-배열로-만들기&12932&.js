//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((x) => parseInt(x));
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
  n = n.toString().split("").reverse().join("");
  for (let i = 0; i < n.length; i++) {
    answer.push(parseInt(n[i])); // n은 지금 문자형이기때문에 Push 하기전에 정수형으로 바꿔줌
    // answer.push(n[i]) 로 해주면 현재 n[i]는 문자형이기때문에 결과는 ["5","4","3","2","1"] 가 됩니다.
    // answer(parseInt(n[i])) 로 해준다면 n[i]는 문자형 => 정수형으로 변하기 때문에 결과는 [5, 4, 3, 2, 1] 가 됩니다.
    // 문자형과 정수형의 차이는 숫자에 큰 따옴표가 있느냐 없느냐의 차이입니다.
  }
  return answer;
}

//정답 4 - jaewon1676
function solution(n) {
  return (n = n
    .toString()
    .split("")
    .reverse()
    .map((o) => (o = parseInt(o))));
}

// 정답 5 - prove-ability
function solution(n) {
  // 1. 문자열 변환
  // 2. 배열로 변환
  // 3. 배열 반전
  // 4. 정수로 변환
  return n
    .toString()
    .split("")
    .reverse()
    .map((v) => parseInt(v));
}

//정답 6 - yongchanson
function solution(n) {
  let answer = [];
  let string = n.toString();
  for (let i = string.length - 1; i >= 0; i--) {
    let slice = string.substr(i, 1) * 1;
    answer.push(slice);
  }
  return answer;
}

// 정답 7 - inhwa-jang
function solution(n) {
    let str = String(n);
    let newArr = Array.from(str);
    newArr.reverse();
    return newArr.map(Number);
}
