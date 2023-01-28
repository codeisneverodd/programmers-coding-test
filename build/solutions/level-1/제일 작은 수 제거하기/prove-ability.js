function solution(arr) {
  // 최솟값 찾기
  const min = Math.min(...arr);
  // arr 중 min 과 같은 요소의 인덱스 제거
  arr.splice(
    arr.findIndex((num) => num === min),
    1
  );
  // 만약 arr 가 비어있다면 [-1] 반환
  if (arr.length === 0) return [-1];
  return arr;
}