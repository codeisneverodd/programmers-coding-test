//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1(🎩 refactor 220830) - codeisneverodd
function solution(numbers, target) {
  const dfs = (index, sum) => {
    if (index === numbers.length) return sum === target ? 1 : 0;
    return dfs(index + 1, sum + numbers[index]) + dfs(index + 1, sum - numbers[index]);
  };
  return dfs(0, 0);
}

//정답 2 - ssi02014
function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);
  return answer;

  function dfs(index, sum) {
    // 재귀 종료
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }
}

//정답 3 - codeisneverodd
function solution(numbers, target) {
  var answer = 0;
  const binaryLength = numbers.length;
  const binary = 2 ** binaryLength;
  for (let i = 0; i < binary; i++) {
    const numSlice = numbers.slice();
    const binaryString = i.toString(2).padStart(binaryLength, '0');
    for (let j = 0; j < binaryString.length; j++) binaryString[j] === '0' ? (numSlice[j] *= -1) : null;
    const calculated = numSlice.reduce((prev, current) => prev + current);
    if (calculated === target) answer += 1;
  }
  return answer;
}
