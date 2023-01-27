function solution(clothes) {
  // 각 카테고리별 의상의 수를 clothsObj 객체에 저장
  const clothsObj = {};
  clothes.forEach((cloth) =>
    clothsObj[cloth[1]] ? clothsObj[cloth[1]]++ : (clothsObj[cloth[1]] = 1)
  );

  // 어떤 카테고리의 옷의 개수가 n개라면, 스파이는 해당 카테고리에 대해 n+1가지 선택권을 가짐
  // (옷을 입지 않거나, 1번 옷을 입거나, 2번 옷을 입거나, ..., n번 옷을 입거나)
  // 즉, (각 카테고리의 옷의 개수 + 1)를 answer에 차례로 곱해주면 됨
  let answer = 1;
  for (let key of Object.keys(clothsObj)) {
    answer *= clothsObj[key] + 1;
  }

  // 스파이는 하루에 최소 한 개의 의상은 입어야 하므로 아무것도 입지 않는 경우 빼기
  return answer - 1;
}