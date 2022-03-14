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