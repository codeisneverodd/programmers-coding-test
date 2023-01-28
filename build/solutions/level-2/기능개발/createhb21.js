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