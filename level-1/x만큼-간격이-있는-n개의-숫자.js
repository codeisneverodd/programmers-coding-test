//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(x, n) {
  return Array.from(Array(n), (_, index) => x * (index + 1));
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

//정답 3 - jaewon1676
function solution(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    // 삼항 연산자와 +로 문자열을 붙여주어 추가.
    i % 2 == 0 ? (str = str + "수") : (str = str + "박");
  }
  return str;
}

// 정답 4 - prove-ability
function solution(x, n) {
  var answer = [];
  let i = 1;
  // n개 지니는 리스트를 리턴해야 합니다
  while (answer.length !== n) {
    // x부터 시작해 x씩 증가하는 숫자
    answer.push(x * i);
    i++;
  }
  return answer;
}
