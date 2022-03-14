//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(s) {
    var answer = [];
    let sets = s
        .slice(2, -2)
        .split('},{')
        .map(set => set.split(',').map(x => parseInt(x)))
        .sort((a, b) => a.length - b.length)
    for (const set of sets) answer.push(...set.filter(x => !answer.includes(x)))
    return answer;
}