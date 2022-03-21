//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - jaewon1676
function solution(land) {
  var answer = 0;
  
  for (i = 1; i < land.length; i++){
      land[i][0] += (Math.max(land[i-1][1], land[i-1][2], land[i-1][3]));
      land[i][1] += (Math.max(land[i-1][0], land[i-1][2], land[i-1][3]));
      land[i][2] += (Math.max(land[i-1][0], land[i-1][1], land[i-1][3]));
      land[i][3] += (Math.max(land[i-1][0], land[i-1][1], land[i-1][2]))
  }
  answer = land[land.length - 1]
  return Math.max(...answer)
}
/* 풀이 과정
1. land의 행만큼 반복문을 돌린다.
2. i행(두번째 행)부터 land.length - 1행(마지막 행)까지 본인 열을 제외한 나머지 열의 최댓값을 본인의 열에 더하여 누적한다.
3. 마지막까지 다 구하면 마지막 행에서 최대값을 반환한다.*/