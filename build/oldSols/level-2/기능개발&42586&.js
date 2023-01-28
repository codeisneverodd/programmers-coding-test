//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd - 시간복잡도 감소
function solution(progresses, speeds) {
    var answer = [];
    const remainDays = progresses.map((prog, index) => Math.ceil((100 - prog) / speeds[index]))
    console.log(remainDays)
    let maxDay = remainDays[0]
    answer.push(0)
    for (let i = 0; i < remainDays.length; i++) {
        if (remainDays[i] <= maxDay) {
            answer[answer.length - 1] += 1
        } else {
            answer.push(1)
            maxDay = remainDays[i]
        }
    }
    return answer;
}

//정답 2 - codeisneverodd
function solution(progresses, speeds) {
    var answer = [];
    while (progresses.length > 0) {
        let done = 0
        progresses = progresses.map((prog, index) => prog + speeds[index])
        const length = progresses.length
        for (let i = 0; i < length; i++) {
            if (progresses[0] >= 100) {
                progresses.shift()
                speeds.shift()
                done += 1
            } else {
                break
            }
        }
        if (done > 0) answer.push(done)
    }
    return answer;
}

//정답 3 - jaewon1676
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

// 정답 4 - createhb21
function solution(progresses, speeds) {
    // answer은 각 배포 때 함께 배포되는 기능의 수를 담은 배열
    var answer = [];
    // 각각의 기능이 몇 일 소요되는지 담은 큐
    let queue = [];
  
    for (let i = 0; i < speeds.length; i++) {
      // 각각의 기능이 몇 일 걸리는지 계산
      let task = Math.ceil((100 - progresses[i]) / speeds[i]);
      // 위 계산한 결과값(작업일)을 모두 큐에 넣어준다.
      queue.push(task);
  
      // 그 다음 작업이 queue[0]보다 작거나 같을 경우, queue.push()
      // 그 다음 작업이 queue[0]보다 클 경우, queue의 사이즈만큼 answer.push(), queue 초기화
      if(task > queue[0]) {
        answer.push(queue.length-1);
        // 큐 초기화
        queue = [task];
      }
    }
  
    answer.push(queue.length);
    return answer;
  }

// 정답 5 - chaerin-dev
function solution(progresses, speeds) {
  // 각 기능 개발 작업이 끝나기까지 남은 일수를 계산해서 daysLeftArr 배열에 저장
  const daysLeftArr = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));

  // 최초 배포날은 daysLeftArr의 첫 번째 요소
  let deployDay = daysLeftArr[0];
  // 각 배포에 몇 개의 기능이 배포될지 셀 변수
  let cnt = 0;
  // 각 배포에 몇 개의 기능이 배포될지 저장할 배열
  const answer = [];

  // leftDays 배열을 차례로 순회하며 현재 배포일보다 이후에 배포되어야할 기능을 만나면 이전까지의 기능을 한번에 배포
  daysLeftArr.forEach((daysLeft) => {
    if (deployDay < daysLeft) {
      deployDay = daysLeft;
      answer.push(cnt);
      cnt = 0;
    }
    cnt++;
  });
  answer.push(cnt);

  // 정답 반환
  return answer;
}

// 정답 6 - RyanDeclan
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
