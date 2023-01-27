function solution(arr) {
  // 콜백함수의 조건을 만족하는 '모든' 값을 배열로 반환하고,
  // 조건을 만족하는 값이 없으면 빈 배열을 반환하는 filter 메서드 활용
  // 첫 번째 요소의 경우 undefined와 비교
  return arr.filter((item, index) => item !== arr[index - 1]);
}

