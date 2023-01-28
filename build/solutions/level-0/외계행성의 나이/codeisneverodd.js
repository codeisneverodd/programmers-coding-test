function solution(age) {
  return [...('' + age)].map(num => String.fromCharCode('a'.charCodeAt(0) + +num)).join('');
}