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

