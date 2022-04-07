//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverod
function solution(n) {
    var answer = 0;
    const answerArray = n
        .toString()
        .split("")
        .sort((a, b) => b - a)
        .join('')
    answer = Number(answerArray)
    return answer;
}

//정답 2 - chaerin-dev
function solution(n) {
  // 정수 -> 문자열 -> 배열
  let arrN = String(n).split("");
  // 배열 내림차순 정렬
  arrN.sort((a, b) => b - a);
  // 배열 -> 문자열 -> 정수
  return parseInt(arrN.join(""));
}