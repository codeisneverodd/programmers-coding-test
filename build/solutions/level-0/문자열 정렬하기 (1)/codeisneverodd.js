function solution(my_string) {
  return my_string
    .match(/[0-9]/g)
    .map(str => +str)
    .sort((a, b) => a - b);
}