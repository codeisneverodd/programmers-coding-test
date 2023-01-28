function solution(answers) {
  let result = [];

  let players = {
    1: {
      pattern: [1, 2, 3, 4, 5],
      count: 0,
    },
    2: {
      pattern: [2, 1, 2, 3, 2, 4, 2, 5],
      count: 0,
    },
    3: {
      pattern: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
      count: 0,
    },
  };
  let max = 0;
  answers.forEach((answer, index) => {
    for (let [key, { pattern }] of Object.entries(players)) {
      // 조정된 index 의 값과 답이 맞다면 해당 플레이어 count 증가
      if (pattern[index % pattern.length] === answer) {
        players[key].count++;
        // 제일 높은 count 구하기
        if (max < players[key].count) max = players[key].count;
      }
    }
  });
  // players 중에 count 가 max 와 값이 같다면 result 추가
  for (let [key, { count }] of Object.entries(players)) {
    if (count === max) result.push(parseInt(key, 10));
  }

  return result;
}