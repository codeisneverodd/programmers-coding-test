function solution(progresses, speeds) {
    let answer = [];
    
    while(speeds.length > 0) { 
        for(let i=0;i<speeds.length;i++) { 
            if(progresses[i] < 100) {
                progresses[i] += speeds[i];
            }
        }
        let count = 0;
        while(progresses[0] >= 100) { 
            progresses.shift();
            speeds.shift();
            count++;
        }
        if(count > 0) { // 결과 배열에 넣어주기
            answer.push(count);
        }
    }
    return answer;
}