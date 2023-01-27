function solution(s) {
  // 문자열 -> 정수 이차원 배열
  const sArr = s
    .substring(2, s.length - 2)
    .split("},{")
    .map((e) => e.split(",").map((e) => parseInt(e)))
    .sort((a, b) => a.length - b.length);
  // 정답을 저장할 배열
  const answer = [];
  // 이차원배열을 순회하며 직전 배열과 겹치지 않는 요소만 answer에 추가
  for (let i = 0; i < sArr.length; i++) {
    for (let j = 0; j < sArr[i].length; j++) {
      const temp = sArr[i][j];
      if (!answer.includes(sArr[i][j])) answer.push(sArr[i][j]);
    }
  }
  return answer;
}