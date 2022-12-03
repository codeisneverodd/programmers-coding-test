//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - jetom88
function solution(rsp) {
  const str = rsp.split('');
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '2') result.push('0');
    else if (str[i] === '0') result.push('5');
    else result.push('2');
  }

  return result.join('');
}
