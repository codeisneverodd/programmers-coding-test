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

