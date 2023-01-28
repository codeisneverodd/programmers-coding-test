// arr배열에서 selectNumber개의 요소를 뽑는 모든 경우를 배열로 반환하는 함수
const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
};

// num이 소수인지 여부를 반환하는 함수
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  const combinationResult = getCombinations(nums, 3);
  let answer = 0;
  combinationResult.forEach((e) => {
    const sum = e[0] + e[1] + e[2];
    if (isPrime(sum)) answer++;
  });
  return answer;
}