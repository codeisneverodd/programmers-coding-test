function solution(people, limit) {
  let count = 0;
  // 오름차순 정렬
  people.sort((a, b) => a - b);
  
  // people 배열 요소가 있다면?
  while(people.length) {
      
      // 요소 중 가장 큰 수인 마지막 요소를 가져온다
      let sum = people.pop();
      
      // 요소 중 가장 작은 수를 더한다
      sum += people[0]
      
      // 합이 무게제한보다 작거나 같다면 가장 작은 요소 제거
      if(sum <= limit) people.shift();
      
      count++;
  }
  
  return count;
}