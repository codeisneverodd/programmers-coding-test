function solution(my_string) {
  const nums = my_string.match(/[0-9]+/g);
  return nums ? nums.map(num => +num).reduce((a, c) => a + c, 0) : 0;
}