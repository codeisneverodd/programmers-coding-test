//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(citations) {
    var answer = 0;
    citations.sort((a, b) => b - a)
    let h = 0
    while (h + 1 <= citations[h]) h++
    answer = h
    return answer;
}

//정답 2 - codeisneverodd
function solution(citations) {
    var answer = 0;
    let h = 0
    let length = 0
    while (length >= h) {
        h++
        length = citations.filter(citation => citation >= h).length
    }
    answer = h - 1
    return answer;
}