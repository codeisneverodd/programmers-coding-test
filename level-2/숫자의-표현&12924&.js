//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) { //수학적 풀이는 별도로 하지 않았습니다.
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        let sum = 0
        for (let j = i; j <= n; j++) {
            sum += j
            if (sum >= n) {
                if (sum === n) answer++
                break
            }
        }
    }
    return answer;
}

//정답 2 - prove-ability
function solution(n) {
  let answer = 0;
  for(let i = 1; i <= n; i++) {
      let sum = 0;
      for(let j = i; j <= n; j++) {
          sum += j;
          if(sum > n) break;
          if(n === sum) {
              answer++;
              break;
          }
      }
  }
  return answer;
}

//정답 3 - yongchanson
function solution(n) {
  /*
  정답 = n의 홀수 약수의 개수
  15의 홀수 약수 : 1,3,5,15
  1+2+3+4+5=15 (중간값 3)
  4+5+6=15 (중간값 5)
  7+8=15 (연속된 값)
  15=15 (15)
  */
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i == 0 && i % 2 == 1) result++;
  }
  return result;
}
