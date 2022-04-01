//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
    var answer = '';
    for (let i = 0; i < n; i++) {
        answer += i % 2 === 0 ? '수' : '박'
    }
    return answer;
}

//정답 2 - chaerin-dev
function solution(n) {
  // "수박"을 n번 반복한 문자열의 0번 인덱스부터 n만큼 추출해서 반환
  return "수박".repeat(n).substr(0, n);
}
