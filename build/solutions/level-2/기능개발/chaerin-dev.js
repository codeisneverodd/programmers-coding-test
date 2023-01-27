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

