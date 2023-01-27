function solution(nums) {
  let max = nums.length / 2; // N / 2
  let set = [...new Set(nums)]; // 중복을 없앤다.
  return set.length > max ? max : set.length;
}

/* 풀이 과정
1. 많은 종류의 폰켓몬을 포함해서 N/2마리 선택해야한다.
2. 같은 숫자는 같은 종류이므로 set을 활용해 중복을 없애고 진행한다.
3. 최대로 고를 수 있는 폰켓몬 수는 N / 2마리가 set의 길이보다 크냐 작냐에 따라 
 두가지 경우의 수로 좁혀진다. */

