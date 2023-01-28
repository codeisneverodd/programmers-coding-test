function solution(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    // 삼항 연산자와 +로 문자열을 붙여주어 추가.
    i % 2 == 0 ? (str = str + '수') : (str = str + '박');
  }
  return str;
}