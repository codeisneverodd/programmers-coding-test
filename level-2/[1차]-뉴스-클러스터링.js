//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(str1, str2) {
    var answer = 0;
    let compare1 = verifiedSlices(str1), compare2 = verifiedSlices(str2)
    const union = new Set([...compare1, ...compare2])
    let multiIntersectionLen = 0, multiUnionLen = 0
    for (const slice of union) {
        const compare1Count = compare1.filter(x => x === slice).length,
            compare2Count = compare2.filter(x => x === slice).length
        multiIntersectionLen += Math.min(compare1Count, compare2Count)
        multiUnionLen += Math.max(compare1Count, compare2Count)
    }
    answer = multiUnionLen === 0 ? 65536 : Math.floor(multiIntersectionLen / multiUnionLen * 65536)
    return answer;
}

function verifiedSlices(str) {
    const onlyAlphabet = /[a-zA-Z]{2}/
    let result = []
    for (let i = 0; i < str.length - 1; i++) {
        const slice = str.slice(i, i + 2)
        if (onlyAlphabet.test(slice)) result.push(slice.toLowerCase())
    }
    return result
}