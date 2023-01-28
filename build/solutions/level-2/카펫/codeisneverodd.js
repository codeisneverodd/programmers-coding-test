function solution(brown, yellow) {
    var answer = [];
    const size = brown + yellow
    answer = widthHeightPair(size).filter(pair => (pair[0] + pair[1]) * 2 - 4 === brown)[0]
    return answer;
}

function widthHeightPair(size) {
    let result = []
    for (let i = 1; i <= Math.sqrt(size); i++) if (size % i === 0) result.push([size / i, i])
    return result
}