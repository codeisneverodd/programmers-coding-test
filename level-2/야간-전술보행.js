//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - LimSB-dev
function check(s1, s2, t1, t2) {
  let result = 10000000
  const totalTime = t1 + t2
  const cnt = parseInt(s1 / totalTime)
  const startTime = totalTime * cnt
  const fristWorkTimes = Array.from(Array(t1).keys()).map(x => x + startTime + 1)
  const secondWorkTimes = Array.from(Array(t1).keys()).map(x => x + startTime + totalTime + 1)
  
  const workTimes = [...fristWorkTimes, ...secondWorkTimes]
  
  for (workTime of workTimes) {
      
      if (s1 <= workTime && workTime <= s2) {
          result = workTime
          break
      }
  }
  
  return result
}


function solution(distance, scope, times) {
  let answer = distance
  
  for (let i = 0; i < scope.length; i++) {
      const [a, b] = scope[i]
      const [c, d] = times[i]
      
      const dist = check(Math.min(a, b), Math.max(a, b), c, d)
      
      if (dist < answer) {
          answer = dist
      }
  }
  
  return answer
}

//정답 2 - 본인의 깃허브 아이디
function solution(n) {
  //정답을 다른 방법으로도 작성했다면 추가해 주세요!
}
