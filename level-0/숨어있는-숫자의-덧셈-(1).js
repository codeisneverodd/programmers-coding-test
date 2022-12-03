//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - jetom88
function solution(my_string) {
  const num = my_string.split('');
  let result = 0;

  for (let i = 0; i < num.length; i++) {
    if (Number(num[i])) result += Number(num[i]);
  }
  return result;
}
