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

