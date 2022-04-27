//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd

function solution(n, a, b) {
    let currentRound = 1;
    const myNextNumber = (num) => Math.floor((num + 1) / 2)//내가 이긴경우 다음으로 가지게 될 번호
    while (a !== b) { // a의 다음 번호가 b의 다음번호와 같아지면 끝난다.
        if (myNextNumber(a) === myNextNumber(b)) break
        a = myNextNumber(a)
        b = myNextNumber(b)
        currentRound++
    }
    return currentRound
}

//정답 2 - le2sky
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
  