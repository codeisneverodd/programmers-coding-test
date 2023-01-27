function solution(id_list, report, k) {
  // 사원 리스트 0으로 초기화 - 받은 메일 숫자 세기
  var answer = Array.from({ length: id_list.length }).fill(0);
  // 신고 내용 객체 초기화 - 신고된 내용 정리
  const reportObj = {};
  // 신고건 반복문으로 하나씩 접근
  for (let i = 0, len = report.length; i < len; i++) {
    const [userId, reportUserId] = report[i].split(' ');
    // 신고 내용 객체에 신고당한 사람이 있고 이전에 신고하지 않았다면 추가
    if (reportObj[reportUserId]) {
      if (!reportObj[reportUserId].includes(userId)) {
        reportObj[reportUserId] = [...reportObj[reportUserId], userId];
      }
      // 신고 내용 객체에 신고당한 사람이 없다면 추가
    } else reportObj[reportUserId] = [userId];
  }
  // 만들어진 신고 내용 객체로 반복적으로 접근
  for (const item of Object.values(reportObj)
    .filter(v => v.length >= k)
    .flatMap(v => v)) {
    // 인덱스로 접근해 메일 카운트 증가
    const index = id_list.findIndex(v => v === item);
    answer[index]++;
  }

  return answer;
}

