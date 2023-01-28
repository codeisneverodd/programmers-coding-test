function solution(common) {
  const isAP = arr => arr[2] - arr[1] === arr[1] - arr[0];
  return isAP(common)
    ? common[common.length - 1] + common[1] - common[0]
    : common[common.length - 1] * (common[1] / common[0]);
}