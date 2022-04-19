//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(numbers) {
    var answer = [];
    const len = numbers.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            answer.push(numbers[i] + numbers[j])
        }
    }
    answer = [...new Set(answer)]
    answer.sort((a, b) => a - b)
    return answer;
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