function solution(n) {
  return move(1, 3, 2, n);
}
const move = (departure, destination, waypoint, numberOfPlate) => {
  if (numberOfPlate === 1) return [[departure, destination]];
  return [
    ...move(departure, waypoint, destination, numberOfPlate - 1),
    ...move(departure, destination, waypoint, 1),
    ...move(waypoint, destination, departure, numberOfPlate - 1),
  ];
};
//재귀를 생각해보기에 좋은 문제입니다.
//추천 레퍼런스 https://shoark7.github.io/programming/algorithm/tower-of-hanoi
/*
n개가 있다면
1. 1->2로 n-1개를 옮김
2. 1->3으로 가장 큰 1개를 옮김
3. 2->1로 n-2개를 옮김
4. 2->3으로 2번에 있는 것 중 가장 큰 1개를 옮김
의 반복

결국 무엇이든  a -> b 로 n 를 옮기는 동작의 반복이므로 이를 재귀로 표현하면 됨.
a->b 로 n 을 옮기는 것은 a->c로 n-1개를 옮겨놓고, a->b로 하나를 옮긴 후, c->b로 n-1개를 옮기는 것의 반복 
함수에서 a는 depature(출발지), b는 destination(도착지), c는 waypoint(경유지)로 작성되어있음.
*/