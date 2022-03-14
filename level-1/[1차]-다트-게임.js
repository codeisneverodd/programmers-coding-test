//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(dartResult) {
    var answer = 0;
    const regex = /\d{1,2}[SDT]{1}[*|#]?/g
    let result = []
    for (const dart of dartResult.match(regex)) {
        const game = [...dart.split(/([SDT]{1})/)]
        const score = game[0]
        let bonus = 1
        let option = 1
        if (game[1] === 'S') bonus = 1
        else if (game[1] === 'D') bonus = 2
        else if (game[1] === 'T') bonus = 3

        if (game[2] === '*') {
            if (result.length !== 0) result[result.length - 1] *= 2
            option = 2
        } else if (game[2] === '#') option = -1

        result.push(score ** bonus * option)
    }
    answer = result.reduce((a, b) => a + b)
    return answer;
}