function solution(nums) {
  const unique = nums.filter((element, index) => {
    return nums.indexOf(element) === index;
  });

  return unique.length > nums.length / 2 ? nums.length / 2 : unique.length;
}