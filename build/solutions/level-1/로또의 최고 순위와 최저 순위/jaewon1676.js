function solution(lottos, win_nums) {
  var answer = [];
  let max = 7;
  let min = 7;
  console.log(lottos);
  console.log(win_nums);
  for (let i = 0; i < 6; i++) {
    if (lottos.includes(win_nums[i])) {
      max--;
    }
  }
  min = max;
  for (let i = 0; i < 6; i++) {
    if (lottos[i] == 0) min--;
  }
  if (max == 7) max = 6;
  if (min == 7) min = 6;
  answer = [min, max];
  return answer;
}