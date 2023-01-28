function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}

/* 풀이과정 arr [4,3,2,1] 일경우
Math.min(...arr)은 1
arr.indexOf(1), 1이 있는 index가 3이므로 3 반환.
arr.splice(3, 1) arr의 3번째 index만 제거 해준다.
arr의 크기가 1보다 작으면 -1, 그렇지 않으면 그대로 반환. */