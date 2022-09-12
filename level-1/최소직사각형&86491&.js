//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220830) - codeisneverodd
function solution(sizes) {
  const maxWidth = Math.max(...sizes.map(card => Math.min(...card)));
  const maxHeight = Math.max(...sizes.map(card => Math.max(...card)));
  return maxWidth * maxHeight;
}

// 정답 2 - prove-ability
function solution(sizes) {
  // 가로, 세로 중 큰 값을 가로 길이로 변경(스압)
  sizes.forEach(([width, height], index) => {
    if (sizes[index][0] < sizes[index][1]) [sizes[index][0], sizes[index][1]] = [sizes[index][1], sizes[index][0]];
  });

  // 가로, 세로 각각 큰 값 추출
  const widthMax = Math.max(...sizes.map(v => v[0]));
  const widthHeight = Math.max(...sizes.map(v => v[1]));

  return widthMax * widthHeight;
}
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(sizes) {
  for (let card of sizes) {
    if (card[0] < card[1]) [card[0], card[1]] = [card[1], card[0]];
  }

  const maxWidth = Math.max(...sizes.map(card => card[0]));
  const maxHeight = Math.max(...sizes.map(card => card[1]));
  return maxWidth * maxHeight;
}
