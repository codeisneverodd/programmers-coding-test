function solution(arr) {
  // arr의 모든 요소를 sum에 더힘
  let sum = arr.reduce((sum, e) => sum + e);
  // sum을 arr의 요소의 갯수로 나눈 후 반환
  return sum / arr.length;
}

