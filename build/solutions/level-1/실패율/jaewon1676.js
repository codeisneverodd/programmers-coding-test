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