//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(n) {
  let answer = "";
  for (let i = 0; i < n; i++) {
    answer += i % 2 === 0 ? "수" : "박";
  }
  return answer;
}

//정답 2 - chaerin-dev
function solution(n) {
  // "수박"을 n번 반복한 문자열의 0번 인덱스부터 n만큼 추출해서 반환
  return "수박".repeat(n).substr(0, n);
}

//정답 3 - jaewon1676
function solution(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    // 삼항 연산자와 +로 문자열을 붙여주어 추가.
    i % 2 == 0 ? (str = str + "수") : (str = str + "박");
  }
  return str;
}

//정답 4 - prove-ability
function solution(n) {
  let answer = '';
  answer = "수박".repeat(n / 2)
  if(n % 2 !== 0) answer += '수'
  return answer;
}

