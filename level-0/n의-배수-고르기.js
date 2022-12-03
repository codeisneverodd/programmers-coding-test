//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - jetom88
function solution(n, numlist) {
  let result = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n === 0) result.push(numlist[i]);
  }
  return result;
}
