//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(arr) {
    var answer = [];
    const index = arr.indexOf(Math.min(...arr))
    arr.splice(index, 1)
    answer = arr.length === 0 ? [-1] : arr
    return answer;
}

//정답 2 - jaewon1676
function solution(arr) {
    var answer = [];
  
    let min = Math.min(...arr)
    while(1){
        for (let i=0; i<arr.length; i++){
            if (min == arr[i]){
                arr.splice(i, 1)
                if (arr.length == 0){
                    return [-1]
                }
                else {
                return arr;
                }
            }
        }
    }    
    return -1
  }
  /* 풀이과정
  1. 배열의 최솟값을 min 변수에 담아줍니다.
  2. 배열을 순회하며 최솟값을 찾아 splice 메서드를 사용해 최솟값의 자리만 제거해줍니다.
  3. 최솟값 제거 후 배열 크기가 0이면 -1, 그렇지 않으면 배열 그대로 반환합니다. */
  
//정답 3 - jaewon1676
  function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if (arr.length < 1) return [-1];
    return arr;
  }
  /* 풀이과정 arr [4,3,2,1] 일경우
  Math.min(...arr)은 1
  arr.indexOf(1), 1이 있는 index가 3이므로 3 반환.
  arr.splice(3, 1) arr의 3번째 index만 제거 해준다.
  arr의 크기가 1보다 작으면 -1, 그렇지 않으면 그대로 반환. */

//정답 4 - chaerin-dev
function solution(arr) {
  // arr에서 가장 최솟값의 위치를 찾아 해당 위치의 값을 삭제
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  // arr가 빈 배열이 아니면 arr를 반환, arr가 빈 배열이면 [-1]반환
  return arr.length ? arr : [-1];
}