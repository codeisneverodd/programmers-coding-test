//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(arr1, arr2) {
  const answer = [];
  arr1.forEach((row, rowIndex) => {
    answer.push(row.map((col, colIndex) => col + arr2[rowIndex][colIndex]));
  });
  return answer;
}

//정답 2 - codeisneverodd
function solution(arr1, arr2) {
  var answer = new Array(arr1.length);
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = new Array(arr1[0].length);
  }
  for (let row = 0; row < answer.length; row++) {
    for (let col = 0; col < answer[0].length; col++) {
      answer[row][col] = arr1[row][col] + arr2[row][col];
    }
  }
  return answer;
}

//정답 3 - chaerin-dev
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

//정답 4 - yongchanson
function solution(A, B) {
  let answer = [];

  for (let i = 0; i < A.length; i++) {
    answer[i] = [];
    for (let j = 0; j < A[0].length; j++) {
      answer[i][j] = A[i][j] + B[i][j];
    }
  }
  return answer;
}
