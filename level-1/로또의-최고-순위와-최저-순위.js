//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(lottos, win_nums) {
    const zeroCount = lottos.filter(e => e === 0).length
    const matchCount = win_nums.filter(e => lottos.includes(e)).length
    const matchToRank = [6, 6, 5, 4, 3, 2, 1]
    const lowRank = matchToRank[matchCount]
    const highRank = zeroCount === 6 ? 1 : matchToRank[matchCount + zeroCount]

    var answer = [highRank, lowRank];
    return answer;
}

//정답 2 - codeisneverodd
function solution(lottos, win_nums) {
    // 0이 없는 경우 > 최저 순위 ==  최고 순위
    // 0이 있는 경우 > 모두 0인경우 > 1위
    //            > 0이 아닌 수가 있는 경우 > 최저 순위 - (0의 개수) = 최고순위
    // 0이 있는 경우 0만 중복이 가능하므로, 0의 개수를 (배열 길이 - 집합 길이 + 1)를 통해 구함.
    // 순위는 7 - hit
    // 최종적으로 7위인 경우 6위로 변경
    var answer = []
    if (lottos.indexOf(0) === -1) {
        answer[0] = answer[1] = 7 - hit(lottos, win_nums)
    } else {
        const zeroCount = lottos.length - [...new Set(lottos)].length + 1
        answer[1] = 7 - hit(lottos, win_nums)
        zeroCount === 6 ? answer[0] = 1 : answer[0] = answer[1] - zeroCount
    }
    for (let i = 0; i < 2; i++) {
        answer[i] >= 7 ? answer[i] = 6 : null
    }
    return answer;
}

function hit(lottos, win_nums) {
    let result = 0
    lottos.forEach((element) => {
        win_nums.indexOf(element) === -1 ? null : result += 1
    })
    return result
}


