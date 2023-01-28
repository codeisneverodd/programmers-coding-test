//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
    let answer = n;
    const nCountOne = n.toString(2).match(/1/g).length
    while (true) {
        answer++
        if (nCountOne === (answer).toString(2).match(/1/g).length) break
    }
    return answer;
}

//정답 2 - codeisneverodd
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

//정답 3 - prove-ability
function solution(n) {
  let i = n;
  n = n.toString(2).match(/1/g).length;
  while(true) {
      i++;
      const value = i.toString(2).match(/1/g).length;
      if(n === value) return i;
  }
}

//정답 4 = ryan-dia
function solution(n) {
    const count = (num) => num.toString(2).match(/1/g).length;
    for(i=(n+1); i< 1_000_000; i++) if(count(n) == count(i)) return i
}
