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