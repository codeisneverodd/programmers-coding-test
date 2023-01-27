function solution(n, a, b) {
  let arr = Array.from({ length: n }, () => 0)
  arr[b - 1] = "B"
  arr[a - 1] = "A"

  const isDiff = () => {
    return (
      (arr.indexOf("A") + 1 > arr.length / 2 && arr.indexOf("B") + 1 <= arr.length / 2) ||
       (arr.indexOf("A") + 1 <= arr.length / 2 && arr.indexOf("B") + 1 > arr.length / 2)) ? true : false
  };
  const isLeft = () => {
    return (arr.indexOf("A") + 1 > arr.length / 2) ? false : true
  };

  //대진표의 절반을 기준으로 양옆에 A와 B가 있을 경우 log2N을 구하면 라운드 수가 나옴
  while (!isDiff()) {
    if (isLeft()) {
      arr.splice(arr.length / 2)
    } else {
      arr.splice(0, arr.length / 2)
    }
  }
  return Math.log2(arr.length)
}
  