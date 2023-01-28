//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(N, stages) {
  let stageNFailRate = [];
  for (let stage = 1; stage <= N; stage++) {
    const playerReached = stages.filter((player) => player >= stage).length;
    const playerChallenging = stages.filter(
      (player) => player === stage
    ).length;
    stageNFailRate.push([stage, playerChallenging / playerReached]);
  }
  stageNFailRate.sort((a, b) => b[1] - a[1]);
  return stageNFailRate.map((stage) => stage[0]);
}

//정답 2 - codeisneverodd
function solution(N, stages) {
  var answer = [];
  let failRate = new Array(N + 2).fill(0);
  let playerChallenging = new Array(N + 2).fill(0);
  let playerReached = new Array(N + 2).fill(0);

  for (const stage of stages) {
    for (let i = 1; i <= stage; i++) playerReached[i] += 1;
    playerChallenging[stage] += 1;
  }
  for (let i = 1; i <= N + 1; i++)
    failRate[i] =
      playerReached[i] === 0 ? 0 : playerChallenging[i] / playerReached[i];
  const rateNIndex = failRate
    .slice(1, N + 1)
    .map((rate, stage) => [rate, stage + 1]);
  const sortedRate = rateNIndex.sort((a, b) => b[0] - a[0]);
  answer = sortedRate.map((stage) => stage[1]);
  return answer;
}

//정답 3 - jaewon1676
function solution(N, stages) {
  let map = Array.from(Array(N), () => Array(2).fill(0));
  let answer = Array(N).fill(0, 0, N); // 스테이지별 탈락자 수
  let rate = Array(N).fill(0, 0, N); // 스테이지별 실패율
  let count = 0;

  stages.sort(function (a, b) {
    return a - b;
  }); // 난이도 오름차순 정렬
  for (let i = 1; i <= N; i++) {
    while (1) {
      // i 스테이지의 실패율 계산
      if (stages[0] == i) {
        answer[i - 1] += 1;
        count += 1;
        stages.shift();
      } else break;
    }
    rate[i - 1] += answer[i - 1] / (stages.length + count); // 실패율 계산

    count = 0;

    map[i - 1][0] = i;
    map[i - 1][1] = rate[i - 1];
  }
  map.sort((a, b) => b[1] - a[1]); // value값(실패율) 기준 내림차순정렬
  let stack = []; // 답
  for (let i = 0; i < map.length; i++) {
    stack.push(map[i][0]);
  }

  return stack;
}

/* 풀이 과정
1. 스테이지를 정렬 후 난이도 N과 같은 스테이지가 맨 앞에 있는지 찾아 찾으면 shift, 찾지 못하면 다음 난이도로 넘어간다.
2. 실패율을 계산해주기 위해, 스테이지별 탈락자 수,스테이지별 실패율 배열을 생성하여 각각, 계산해준다.
3. 계산 해준 값들을 2차원 배열 map 객체에 넣어준다. 2차원으로 한 이유는 index값과, 실패율 값을 같이 넣어 정렬 시에도 index값을 유지 하기 위해서.
4. 실패율을 내림차순(같으면 스테이지가 낮은거부터 오름차순)으로 정렬하여 출력해준다.
*/
