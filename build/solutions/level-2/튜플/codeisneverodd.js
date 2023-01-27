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

