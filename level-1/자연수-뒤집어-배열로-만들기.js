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