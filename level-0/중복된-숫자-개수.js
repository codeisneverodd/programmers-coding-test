//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - jetom88
function solution(array, n) {
  const result = array.filter(num => num === n);

  return result.length;
}
