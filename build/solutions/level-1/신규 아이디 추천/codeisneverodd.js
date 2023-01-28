function solution(new_id) {
  let answer = new_id
    .toLowerCase() //step 1
    .replace(/[^0-9a-z._-]/g, '') // step 2
    .replace(/\.+/g, '.') //step 3
    .replace(/^\.|\.$/g, '') //step 4
    .replace(/^$/, 'a') //step 5
    .slice(0, 15)
    .replace(/\.$/, ''); //step 6
  // step7
  if (answer.length === 1) answer = answer[0].repeat(3);
  if (answer.length === 2) answer = answer + answer[1];

  return answer;
}