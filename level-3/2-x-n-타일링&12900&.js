//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - jaewon1676
function solution(n) {
  let dp = [0, 1, 2] // n이 1, 2일때는 바로 답을 출력,
  if (n>2){ // n이 3 이상이면 필요한 만큼의 수 까지만 수를 만들어준다.
      for (let i=3; i<=n; i++){
          dp.push((dp[i-1] + dp[i-2]) % 1000000007);
      }
  }
  return dp[n]
}
/* 
n이 1일땐 1, 2일땐 2, 3일땐 3, 4일땐 5 . . 의 식이 보인다.
n = (n - 1) + (n - 2)의 식으로 구할 수 있고,
제한 사항을 주의해서 풀어보자. */