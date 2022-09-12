//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(nums) {
  let answer = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer += 1;
      }
    }
  }

  return answer;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}

//정답 2 - jaewon1676
// https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript

function solution(nums) {
    let len = nums.length, answer = 0;

    for (let i = 0; i < len - 2; i++) {
      for (let j = i + 1; j < len - 1; j++) {
        for (let k = j + 1; k < len; k++) {
          if (isPrime(nums[i] + nums[j] + nums[k])) {
            answer++;
          }
        }
      }
    }
    return answer;
}

const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) { //n의 제곱근까지 순회
      if (n % i === 0) { // 나머지가 0이 나오면 소수가 아니다.
        return false;
      }
    }
    return true;
}
// 세개의 수를 더해야 하기때문에 수 for문 하나당 수 하나를 넣어서 순회하였다.

//정답 3 - chaerin-dev
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
