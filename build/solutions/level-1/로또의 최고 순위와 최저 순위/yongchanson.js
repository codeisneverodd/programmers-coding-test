function solution(lottos, win_nums) {
  //최고당첨개수 : maxPoint + basicPoint
  //최저당첨개수 : basicPoint

  let basicPoint = 0;
  let maxPoint = 0;
  let answer = [];

  lottos.forEach(function (lottos_item) {
    win_nums.forEach(function (win_nums_item) {
      if (lottos_item == win_nums_item) {
        basicPoint++;
      }
    });
  });

  lottos.forEach(function (item) {
    if (item == 0) {
      maxPoint++;
    }
  });

  maxPoint + basicPoint >= 2
    ? answer.push(7 - maxPoint - basicPoint)
    : answer.push(6);
  basicPoint >= 2 ? answer.push(7 - basicPoint) : answer.push(6);

  return answer;
}