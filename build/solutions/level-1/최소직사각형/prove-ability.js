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