//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(left, right) {
    var answer = 0;
    for (let num = left; num <= right; num++) {
        if (Number.isInteger(Math.sqrt(num))) {
            answer -= num
        } else {
            answer += num
        }
    }
    return answer;
}

//정답 2 - codeisneverodd
function solution(left, right) {
    var answer = 0;
    for (let num = left; num <= right; num++) {
        divisorCounter(num) % 2 === 0 ? answer += num : answer -= num
    }
    return answer;
}

const divisorCounter = (num) => {
    let count = 0
    const sqrt = Math.sqrt(num)
    for (let i = 1; i <= sqrt; i++) if (num % i === 0) count += 1
    return Number.isInteger(sqrt) ? (count - 1) * 2 + 1 : count * 2
}

//정답 3 - jaewon1676
function solution(left, right) {
    var answer = 0;
    
    for (left; left<=right; left++){
        // left의 제곱근이 정수면 약수의 개수는 홀수
        if (Number.isInteger(Math.sqrt(left))){
            answer -= left 
        } else {
            answer += left
        }
    }
    return answer;
}

// 정답 4 - prove-bility
function getDivisorCount(i) {
    let count = 0;
    for(let j = 1; j <= i; j++) {
        if(i % j === 0) count++;
    }
    return count;
}

function solution(left, right) {
    let answer = 0;
    for(let i = left; i <= right; i++) {
        let count = getDivisorCount(i);
        if(count % 2 === 0) answer += i;
        else answer -= i;
    }
    return answer;
}