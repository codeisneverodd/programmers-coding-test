function solution(arr) {
  // arr에서 가장 최솟값의 위치를 찾아 해당 위치의 값을 삭제
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  // arr가 빈 배열이 아니면 arr를 반환, arr가 빈 배열이면 [-1]반환
  return arr.length ? arr : [-1];
}