function solution(id_list, report, k) {
  // 한 유저가 같은 유저를 여러 번 신고한 경우는 신고 횟수 1회로 처리
  let set = new Set(report);
  report = Array.from(set);

  // 1. report를 2차원배열로 변형
  // 2. 각 유저가 신고당한 횟수 cnt에 저장
  // 3. 각 유저를 신고한 유저 who에 저장
  let cnt = Array.from({ length: id_list.length }, i => 0);
  let who = Array.from({ length: id_list.length }, i => []);
  for (let i = 0; i < report.length; i++) {
    report[i] = report[i].split(' ');
    cnt[id_list.indexOf(report[i][1])]++;
    who[id_list.indexOf(report[i][1])].push(report[i][0]);
  }

  // k회 이상 신고당한 유저 확인 및 각 유저가 받은 메일 개수 mail에 저장
  let mail = Array.from({ length: id_list.length }, i => 0);
  for (let i = 0; i < cnt.length; i++) {
    if (cnt[i] < k) continue;
    for (let j = 0; j < who[i].length; j++) {
      mail[id_list.indexOf(who[i][j])]++;
    }
  }
  return mail;
}
//정답 6(🎩 refactor 220425) - codeisneverodd
function solution(id_list, report, k) {
  //report를 set을 이용하여 중복제거, 각 id 당 신고당한 횟수 reportedCount에 저장,
  //각 id를 신고한 사람 array를 reportedBy에 저장,
  //k번 이상 신고당한 id를 신고한 id가 받을 메일 수를 mailCount에 저장
  //answer에 mailCount에 저장된 값을 id_list와 같은 id 순서로 저장.
  const reportSet = new Set(report);
  const reportedCount = {}; //{"id": Number(count)}
  const reportedBy = {}; //{"id":[]}
  const mailCount = {}; //{"id":Number(count)}

  id_list.forEach(element => {
    reportedCount[element] = 0;
    mailCount[element] = 0;
    reportedBy[element] = [];
  });

  reportSet.forEach(element => {
    const [id, reported] = element.split(' ');
    reportedCount[reported] += 1;
    reportedBy[reported].push(id);
  });

  for (const reportedId in reportedCount) {
    if (reportedCount[reportedId] >= k) {
      reportedBy[reportedId].forEach(reporter => {
        mailCount[reporter] += 1;
      });
    }
  }
  return id_list.map(id => mailCount[id]);
}
