//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220830) - codeisneverodd
function solution(new_id) {
  const newId = new_id
    .toLowerCase()
    .replace(/[^\w_.-]/g, '')
    .replace(/[.]{2,}/g, '.')
    .replace(/^[.]+/, '')
    .replace(/[.]+$/, '')
    .replace(/^$/, 'a')
    .substring(0, 15)
    .replace(/[.]+$/, '');

  return newId.padEnd(3, newId[newId.length - 1]);
}

//정답 2 - codeisneverodd
function solution(new_id) {
  let answer = '';
  answer = new_id.toLowerCase(); // step1
  const step2 = /[^0-9a-z._-]/g;
  const step3 = /[.]+/g;
  const step4_1 = /^\./;
  const step4_2 = /\.$/;
  answer = answer.replace(step2, '');
  answer = answer.replace(step3, '.');
  answer = answer.replace(step4_1, '');
  answer = answer.replace(step4_2, '');
  answer = answer === '' ? 'a' : answer; // step5
  answer = answer.length >= 16 ? answer.slice(0, 15) : answer; //step6
  answer = answer.replace(step4_2, '');
  switch (
    answer.length // step7
  ) {
    case 1:
      answer = answer + answer[0] + answer[0];
      break;
    case 2:
      answer = answer + answer[1];
      break;
  }
  return answer;
}

//정답 3 - jaewon1676
function solution(new_id) {
  // 1 소문자로 치환
  let answer = new_id
    .toLowerCase()

    // 2 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 문자 제거.
    .replace(/[^a-z0-9-_.]/gi, '')

    // 3 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
    .replace(/[.]{2,}/gi, '.')

    // 4 마침표(.)가 처음이나 끝에 위치하면 제거
    .replace(/^[.]|[.]$/gi, '');

  // 5 빈 문자열이면 a 대입
  if (answer === '') answer = 'a';

  // 6 length > 15이면 그 뒤의 문자들은 제거
  if (answer.length > 15) {
    answer = answer.substring(0, 15);
    // 마침표(.)가 끝에 위치하면 마침표(.)제거
    answer = answer.replace(/[.]$/gi, '');
  }

  // 7 length < 3이면 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙임
  while (answer.length < 3) {
    answer += answer[answer.length - 1];
  }
  return answer;
}

//정답 4 - chaerin-dev
function solution(new_id) {
  // 1단계: 모든 대문자를 소문자로
  new_id = new_id.toLowerCase();

  // 2단계: 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거
  new_id = new_id.replace(/[^\w\-\.]/g, '');

  // 3단계: 연속되는 마침표는 마침표 하나로
  new_id = new_id.replace(/\.{2,}/g, '.');

  // 4단계: 처음이나 끝에 마침표가 있으면 제거
  new_id = new_id.replace(/^\.|\.$/, '');

  // 5단계: new_id가 빈 문자열이면 "a" 대입
  if (new_id.length === 0) new_id = 'a';

  // 6단계: new_id의 길이가 16자 이상이면,
  // new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
  // 제거 후 끝에 마침표가 있으면 제거
  if (new_id.length >= 16) new_id = new_id.slice(0, 15);
  new_id = new_id.replace(/\.$/, '');

  // 7단계: new_id의 길이가 2자 이하이면,
  // new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 이어붙임
  let len = new_id.length;
  if (len <= 2) new_id = new_id + new_id[len - 1].repeat(3 - len);

  return new_id;
}
//정답 5(🎩 refactor 220425) - codeisneverodd
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
