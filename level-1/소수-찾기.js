//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(numbers) {
  let answer = 0;
  const numArr = numbers.split("");
  const permutationAll = [];
  for (let r = 1; r <= numbers.length; r++) {
    const permutationR = Permutation(numArr, r).map((arr) =>
      parseInt(arr.join(""))
    );
    for (let i = 0; i < permutationR.length; i++)
      permutationAll.push(permutationR[i]);
  }
  const permutationSet = [...new Set(permutationAll)];
  for (const number of permutationSet) {
    if (isPrime(number)) answer += 1;
  }
  return answer;
}

function Permutation(arr, r) {
  const result = [];
  if (r === 1) return arr.map((num) => [num]);
  arr.forEach((fixed, index, org) => {
    const rest = [...org.slice(0, index), ...org.slice(index + 1)];
    const permutation = Permutation(rest, r - 1);
    const attached = permutation.map((numbers) => [fixed, ...numbers]);
    result.push(...attached);
  });
  return result;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}
