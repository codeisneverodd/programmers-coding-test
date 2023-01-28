function solution(lottos, win_nums) {
  // 맞춘 수와 0의 갯수 활용할 변수 0으로 초기화
  let winCount = 0;
  let zeroCount = 0;
  // 내 로또 번호 하니씩 접근
  lottos.forEach((num) => {
    // 번호가 0이 아니고 당첨 번호라면
    if (num !== 0 && win_nums.includes(num)) {
      winCount++;
      // 번호가 0이라면
    } else if (num === 0) {
      zeroCount++;
    }
  });
  // 일치한 수와 등수는 반비례하기 때문에 빼기 7
  // 이때 등수를 벗어나면 낙첨(6) 으로 고정
  let max = 7 - (winCount + zeroCount);
  if (max > 5) max = 6;
  let min = 7 - winCount;
  if (min > 5) min = 6;

  return [max, min];
}