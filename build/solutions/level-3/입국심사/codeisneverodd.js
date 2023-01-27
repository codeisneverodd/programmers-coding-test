function solution(n, times) {
  //최소로 걸릴 수 있는 시간 left, 최대로 걸릴 수 있는 시간 right
  let [left, right] = [1, Math.max(...times) * n];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
    //sum은 mid 시간 동안 처리 할 수 있는 사람의 수
    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // left 가 right를 넘어갔다는 것은 left가 n보다 크거나 같아져서 n명을 수용할 수 최소값이 되있다는 것이다.
  return left;
}
