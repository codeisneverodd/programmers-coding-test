//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(my_string, num1, num2) {
  const str = [...my_string];

  [str[num1], str[num2]] = [str[num2], str[num1]];

  return str.join('');
}
