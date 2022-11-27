//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(nums) {
  const numLen = nums.length;
  const setLen = [...new Set(nums)].length;
  return numLen / 2 >= setLen ? setLen : numLen / 2;
}

//정답 2 - jaewon1676
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

// 정답 3 - prove-ability
function solution(nums) {
  var answer = 0;
  // set 을 사용해 중복 제거
  const set = new Set();
  nums.forEach((num) => {
    set.add(num);
  });
  // set 의 사이즈가 N/2 보다 크다면 N/2 반환
  // 그렇지 않다면 set size 반환
  if (set.size > nums.length / 2) answer = nums.length / 2;
  else answer = set.size;

  return answer;
}

// 정답 4 - yongchanson
function solution(nums) {
  const unique = nums.filter((element, index) => {
    return nums.indexOf(element) === index;
  });

  return unique.length > nums.length / 2 ? nums.length / 2 : unique.length;
}

//정답 5 - chaerin-dev
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
