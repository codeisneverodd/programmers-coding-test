//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(x, n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    answer[i] = x * (i + 1);
  }
  return answer;
}

//정답 2 - chaerin-dev
function solution(x, n) {
  var answer = [];
  let add_gap = x;
  // n번 반복
  for (let i = 0; i < n; i++) {
    answer.push(x); // 처음 배열에 넣을 x
    x += add_gap; // x를 배열에 넣은 후 x값을 add_gap만큼 증가
  }
  return answer;
}
