function solution(absolutes, signs) {
  // 연산 결과를 저장할 변수
  let result = 0;
  // signs의 각 요소에 대해
  signs.forEach((e, i) => {
    // 요소가 true이면 result값에 같은 인덱스의 absolutes 요소를 더해줌
    if (e) result += absolutes[i];
    // 요소가 false이면 result값에 같은 인덱스의 absolutes 요소를 빼줌
    else result -= absolutes[i];
  });
  // result 반환
  return result;
}