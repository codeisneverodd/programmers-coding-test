//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - jetom88
function solution(num_list) {
  const even = [];

  const oddNumber = [];

  let result = [];
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) even.push(num_list[i]);
    else oddNumber.push(num_list[i]);
  }
  return (result = [even.length, oddNumber.length]);
}
