//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - jaewon1676
function solution(people, limit) {
  let cnt = 0;
  
  people.sort((a, b) => {return a - b}) // 몸무게 오름차순
  
  while(people.length != 0){ // 무인도에 갖힌 사람이 없어질때까지 반복 
      if (people[0] + people[people.length-1] <= limit){ // 무게가 되면 둘 다 빼주기
          people.pop()
          people.shift()
      } else {
          people.pop() // 무거운사람을 뺴주자
      }
      cnt++;
  }
  return cnt;
} // 4주차 2번 문제와 유사함

// 정답 2- prove-ability
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

// 정답 3 - iHoHyeon
function solution(people, limit) {
  people.sort((a, b) => a - b); // 오름차순 정렬

  let cnt = 0; // 구명보트 개수

  let front = 0; // 가장 몸무게가 작은 사람의 index
  let last = people.length; // 가장 몸무게가 큰 사람의 index

  while (last > front) {
    cnt++;

    const now = people.pop();
    last--;

    if (now + people[front] <= limit) {
      front++; // shift() 연산의 비효율로 인해 front 사용
    }
  }

  return cnt;
}