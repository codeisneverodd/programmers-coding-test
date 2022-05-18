//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(s) {
    var answer = '';
    const arr = s.split(' ')
    answer = Math.min(...arr) + ' ' + Math.max(...arr)
    return answer;
}

//정답 2 - codeisneverodd
function solution(s) {
    var answer = '';
    const arr = s.split(' ').map(x => parseInt(x, 10)).sort((a, b) => a - b)
    answer = arr[0] + ' ' + arr[arr.length - 1]
    return answer;
}

//정답 3 - jaewon1676
function solution(s) {
    s = s.split(' ')
    s.sort((a, b) => {return a - b}) // 오름차순 정렬
    let small = s[0] // s의 최솟값
    let large = s[s.length - 1] // s의 최댓값
    return (small + ' ' + large)
}

//정답 4 - prove-ability
function solution(s) {
  s = s.split(" ").map((v) => parseInt(v, 10))
  return `${Math.min(...s)} ${Math.max(...s)}`;
}

//정답 5 - yongchanson
function solution(s) {
  let arr = s.split(" ").sort((a, b) => a - b);
  arr.splice(1, a.length - 2, " ");
  let result = a.join("");
  return result;
}
