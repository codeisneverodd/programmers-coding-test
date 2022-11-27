//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(answer)].sort((a, b) => a - b);
}

//정답 2 - prove-ability
function solution(numbers) {
    const answer = [];
    
    for(let i = 0, len = numbers.length; i < len; i++) {
        for(let j = i + 1, len = numbers.length; j < len; j++) {
            if(!answer.includes(numbers[i] + numbers[j])) answer.push(numbers[i] + numbers[j])
        }
    }
    
    return answer.sort((a, b) => a - b);
}

