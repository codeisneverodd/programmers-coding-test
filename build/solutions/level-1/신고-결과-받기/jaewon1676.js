function solution(id_list, report, k) {
  let answer = new Array(id_list.length).fill(0);
  let report_list = {}; // 신고당한 ID

  // key, value 형식의 report_list 객체를 만든다.
  id_list.map(user => {
    report_list[user] = []; //key = userid , value = 빈 배열을 가지는 객체
  });
  // report_list { muzi: [], frodo: [], apeach: [], neo: [] }

  // 유저가 신고한 ID를 report_list 객체에 넣어주기 위해 순회한다.
  report.map(user => {
    const [user_id, report_id] = user.split(' ');
    // report 값에서 띄어쓰기로 구분된 문자열을 자르고 user_id, report_id로 각각 넣어준다.
    if (!report_list[report_id].includes(user_id)) {
      report_list[report_id].push(user_id);
      // 배열에 포함하는지 여부를 확인하여 포함하지 않을때 신고자의 이름을 추가하였다.
    }
  });
  for (const key in report_list) {
    // report_list의 index 순회
    if (report_list[key].length >= k) {
      report_list[key].map(user => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }
  return answer;
}

