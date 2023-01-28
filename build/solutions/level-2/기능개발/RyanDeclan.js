// 예제1) 입력값 : [93, 30, 55], [1, 30, 5]
function solution(progresses, speeds) {
    // 각각의 progress 의 기존 인덱스와 해당 기능의 작업한 n일을 포함하는 배열
    let countBox = [];
    let completeBox = [];
    for(k=1; k<100; k++){
        let complete = []
        for(i=0; i<progresses.length; i++){
            if(typeof(progresses[i]) == "number") progresses[i] += speeds[i]
            if(progresses[i] >= 100){
                complete.push([i,k]);
                progresses.splice(i,1,"end")
            } 
        }
        if(complete[0] != null)completeBox.push(...complete)
    } 
    completeBox.sort((a,b) => a[0] - b[0])
    
    //여기까지 한다면 console.log(completeBox) 	[ [ 0, 7 ], [ 1, 3 ], [ 2, 9 ] ] 이런식으로 정리가된다. 
    // 첫번째 기능(인덱스 0) 은 7일간 작업후 배포한다.  두 번째 기능(인덱스 1)은 3일간의 작업 후 배포한다. 세 번째 기능 (인덱스2)는 9일간의 작업후 배포한다 
    
    // 인덱스와 작업한 일수가 같이 들어가있는 배열을 가지고 count하는 작업 
    let count = 0;
    completeBox.reduce((acc, cur, i) => {
        if( acc[0] < cur[1] ){  // 현재 순회하는 값(일수)가 기존에 저장된 값(일수)보다 클때 
            if(i) countBox.push(count)
            acc[0] = cur[1];
            count = 0;
            count++
        }else{count++}
        if(completeBox.length == i + 1) countBox.push(count)  // 마지막 순회까지 다 돌고나면 count를 box에 담는다. 
        return acc
    } ,[0])
    return countBox;
}