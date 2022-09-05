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


//정답 2 - chaerin-dev
// 소수인지 판별하는 함수
function isPrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}
function solution(n) {
  // 소수의 개수를 저장할 변수
  let answer = 0;
  // 1은 소수가 아니므로 2부터 n까지 모든 수에 대해
  for (let i = 2; i <= n; i++) {
    // 소수이면 소수의 개수에 1 추가
    if (isPrime(i)) answer++;
  }
  return answer;
}

//정답 3 - prove-ability
// 소수 판별 로직
function isPrime(n) {
  // n 제곱근 후 올림
  for (let i = 2, len = Math.ceil(Math.sqrt(n)); i <= len; i++) {
      if (n % i === 0) return false;
  }
  return true;
}

function solution(n) {
  let count = 0;
  // 1부터 n까지 반복적으로 접근 - i
  for(let i = 1; i <= n; i++) {
      // i 가 소수인지 확인 후 count++
      if(isPrime(i)) count++;
  }
  
  return count;
}

//정답 4 - jaewon1676
function solution(n) {
  let arr = [];
  
  // 0과 1을 제외한 2부터 n까지 배열에 담아줍니다.
  for(let i=2; i<=n; i++) {
      arr[i] = i;
  }
  for(let i=2; i<=n; i++) { // 인덱스 2부터 반복문 돌면서 0이면 다시 다음 반복문을 돕니다.
      if (arr[i] === 0) continue;
      
      for(let j=i*2; j<=n; j+=i) { // 각 인덱스(i)의 배수들을 0으로 지정해줍니다.
          arr[j] = 0;
      }
  }
  
  // filter를 이용해 0이아닌 수들의 개수를 return합니다.
  return arr.filter(v => v!==0).length;
}
