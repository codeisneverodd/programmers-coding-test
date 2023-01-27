function solution(nums) {
  // 가질 수 있는 폰켓몬의 수
  const getCnt = nums.length / 2;
  // 폰켓몬 종류의 수
  const setSize = new Set(nums).size;
  // 내가 가질 수 있는 폰켓몬의 수보다 폰켓몬 종류의 수가 더 많으면
  // -> 모두 다른 종류의 폰켓몬을 하나씩 가질 수 있음
  // 내가 가질 수 있는 폰켓몬의 수보다 폰켓몬 종류의 수가 더 적으면
  // -> 최대한 다양한 종류의 폰켓몬을 가지려고 해도 원래 있던 폰켓몬 종류의 수가 최대로 가질 수 있는 폰켓몬 종류의 수
  return setSize > getCnt ? getCnt : setSize;
}
