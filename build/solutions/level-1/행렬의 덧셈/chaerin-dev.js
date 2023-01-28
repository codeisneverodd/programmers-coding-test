function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let ans_row = [];
    for (let j = 0; j < arr1[0].length; j++) {
      ans_row.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(ans_row);
  }
  return answer;
}