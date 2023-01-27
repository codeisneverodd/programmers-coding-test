function solution(operations) {
  var answer = [];
  for (let i = 0; i < operations.length; i++) {
    // 숫자 삽입
    if (operations[i][0] == 'I') {
      let m = operations[i].substring(2, operations[i].length);
      answer.push(m);
    }
    // if 최댓값 삭제
    else if (operations[i][0] == 'D' && operations[i][2] == '1' && operations.length > 0) {
      answer.pop();
    }
    // if 최솟값 삭제
    else if (operations[i][0] == 'D' && operations[i][2] == '-' && operations[i][3] == '1' && operations.length > 0) {
      answer.shift();
    }

    answer.sort((a, b) => {
      return a - b;
    });
  }
  if (answer.length == 0) return [0, 0];
  else {
    return [parseInt(answer.pop()), parseInt(answer.shift())];
  }
}
/* 풀이 과정
1. 연산 처리를 구별하기 위해 배열의 0번째 자리, 2번째 자리에 있는 등을 비교하여 조건에 따른 명령을 실행한다.
2. answer 배열을 정렬 해준다
3. 큐가 비어있으면 ( length == 0 ) 0을 반환. , 그렇지 않으면 [최댓값, 최솟값]을 반환한다.
*/
