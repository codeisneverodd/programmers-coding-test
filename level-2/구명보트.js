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