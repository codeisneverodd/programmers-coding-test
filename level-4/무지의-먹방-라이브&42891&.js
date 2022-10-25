//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - ryong9rrr
function solution(food_times, k) {
  const total = food_times.reduce((a, b) => a + b)
  if (total <= k) {
    return -1
  }

  // stack으로 풀기
  const stack = food_times.map((time, i) => [time, i + 1]).sort(([timeA], [timeB]) => timeB - timeA)

  let prev = 0
  while (stack.length > 0 && k >= 0) {
    const [time] = stack[stack.length - 1]
    const acc = (time - prev) * stack.length
    if (k < acc) {
      break
    }
    stack.pop()
    k -= acc
    prev = time
  }

  const result = stack
    .reverse()
    .map(([_, order]) => order)
    .sort((orderA, orderB) => orderA - orderB)
  return result[k % result.length]
}