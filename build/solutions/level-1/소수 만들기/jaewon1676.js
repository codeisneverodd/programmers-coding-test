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