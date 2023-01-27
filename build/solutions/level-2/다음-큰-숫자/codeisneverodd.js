function solution(n) {
    var answer = 0;
    let find = false
    const nCountOne = countOne(n.toString(2))
    let counter = 1
    while (!find) {
        if (nCountOne === countOne((n + counter).toString(2))) {
            answer = n + counter
            find = true
        }
        counter++
    }
    return answer;
}

const countOne = (str) => {
    return str.split('').reduce((sum, currentChar) =>
        currentChar === '1' ? sum += 1 : sum, 0)
}

