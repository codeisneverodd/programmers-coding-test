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

