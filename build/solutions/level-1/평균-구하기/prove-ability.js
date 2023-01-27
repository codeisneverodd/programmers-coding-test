function solution(arr) {
  var answer = 0;
  arr.forEach((num) => {
    answer += num;
  });
  return answer / arr.length;
}
