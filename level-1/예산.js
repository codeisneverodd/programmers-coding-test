//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(d, budget) {
    var answer = 0;
    d.sort((a, b) => a - b)
    for (const department of d) {
        if (budget < department) break
        answer += 1
        budget -= department
    }
    return answer;
}

//정답 2 - prove-ability
function solution(d, budget) {
    let sum = 0;
    let count = 0;
    // 오름차순 정렬
    d.sort((a, b) => a - b);
    for(let i = 0, len = d.length; i < len; i++) {
        // 작은 수 부터 하나씩 더해준다
        sum += d[i];
        // 더한 수가 정해진 예산과 같다면 이전까지 센 카운트 반환
        if(sum > budget) return count;
        count++;
    }
    
    return count;
}
