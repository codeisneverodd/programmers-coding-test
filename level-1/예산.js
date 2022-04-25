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

//정답 3 - jaewon1676
function solution(d, budget) {
    let count = 0; // 최대 물품 지원 할 수 있는 부서 수 
    d.sort((a, b) => a - b) // 오름차순 정렬
    for (let i=0; i<d.length; i++){
        budget = budget - d[i] 
        count++;
        if (budget == 0) return count; // 예산이 0원이면 종료 
        else if (budget < 0) return (count - 1); // 예산이 마이너스면 마지막 부서에는 지원 할 수가 없으니 카운트 - 1 
    }
    return count;
}
// 최대한 많은 부서를 지원해야하기때문에 우리는 작은 수가 담긴 요소부터 빼줄 필요가 있습니다.
// 배열 d를 오름차순 정렬하여
// budget을 가장 작은 수인 배열 d[0]부터 순서대로 빼주며 카운트 해줍니다.
// 예산이 0이거나, 마이너스일 경우를 if문으로 처리를 해주면 됩니다😁 