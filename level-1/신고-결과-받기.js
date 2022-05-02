//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(id_list, report, k) {
  //report를 set을 이용하여 중복제거, 각 id 당 신고당한 횟수 reportedCount에 저장,
  //각 id를 신고한 사람 array를 reportedBy에 저장,
  //k번 이상 신고당한 id를 신고한 id가 받을 메일 수를 mailCount에 저장
  //answer에 mailCount에 저장된 값을 id_list와 같은 id 순서로 저장.
  const reportSet = new Set(report);
  const reportedCount = {}; //{"id": Number(count)}
  const reportedBy = {}; //{"id":[]}
  const mailCount = {}; //{"id":Number(count)}

  id_list.forEach((element) => {
    reportedCount[element] = 0;
    mailCount[element] = 0;
    reportedBy[element] = [];
  });

  reportSet.forEach((element) => {
    const [id, reported] = element.split(" ");
    reportedCount[reported] += 1;
    reportedBy[reported].push(id);
  });

  for (const reportedId in reportedCount) {
    if (reportedCount[reportedId] >= k) {
      reportedBy[reportedId].forEach((reporter) => {
        mailCount[reporter] += 1;
      });
    }
  }
  return id_list.map((id) => mailCount[id]);
}

//정답 2 - jaewon1676
function solution(id_list, report, k) {
  let answer = new Array(id_list.length).fill(0);
  let report_list = {}; // 신고당한 ID

  // key, value 형식의 report_list 객체를 만든다.
  id_list.map((user) => {
    report_list[user] = []; //key = userid , value = 빈 배열을 가지는 객체
  });
  // report_list { muzi: [], frodo: [], apeach: [], neo: [] }

  // 유저가 신고한 ID를 report_list 객체에 넣어주기 위해 순회한다.
  report.map((user) => {
    const [user_id, report_id] = user.split(" ");
    // report 값에서 띄어쓰기로 구분된 문자열을 자르고 user_id, report_id로 각각 넣어준다.
    if (!report_list[report_id].includes(user_id)) {
      report_list[report_id].push(user_id);
      // 배열에 포함하는지 여부를 확인하여 포함하지 않을때 신고자의 이름을 추가하였다.
    }
  });
  for (const key in report_list) {
    // report_list의 index 순회
    if (report_list[key].length >= k) {
      report_list[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }
  return answer;
}

//정답 3 - prove-ability
function solution(id_list, report, k) {
  // 사용자 길이의 빈 배열을 만든다 0
  var answer = new Array(id_list.length).fill(0);
  // 신고된 내용 정리할 객체 선언
  const obj = {};
  // 신고된 내용 정리할 객체 사용자 아이디로 초기화
  id_list.forEach((id) => {
    obj[id] = new Set();
  });
  // 신고 리스트를 조회하며 신고 내용 객체에 정리
  // set.add 를 활용해 같은 사용자의 중복 신고 제거
  report.forEach((str) => {
    const [reporter, target] = str.split(" ");
    obj[target].add(reporter);
  });
  // obj value 하나씩 접근
  for (const value of Object.values(obj)) {
    // 신고당한 횟수가 정지 기준에 적합하다면
    if (value.size >= k) {
      // 해당 유저를 신고한 사람들
      for (let item of value) {
        // 인덱스 구해서 증가
        let index = id_list.indexOf(item);
        answer[index]++;
      }
    }
  }

  return answer;
}

//정답 4 - prove-ability
function solution(id_list, report, k) {
  // 사원 리스트 0으로 초기화 - 받은 메일 숫자 세기
  var answer = Array.from({ length: id_list.length }).fill(0);
  // 신고 내용 객체 초기화 - 신고된 내용 정리
  const reportObj = {};
  // 신고건 반복문으로 하나씩 접근
  for (let i = 0, len = report.length; i < len; i++) {
    const [userId, reportUserId] = report[i].split(" ");
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
    .filter((v) => v.length >= k)
    .flatMap((v) => v)) {
    // 인덱스로 접근해 메일 카운트 증가
    const index = id_list.findIndex((v) => v === item);
    answer[index]++;
  }

  return answer;
}

//정답 5 - chaerin-dev
function solution(id_list, report, k) {
  // 한 유저가 같은 유저를 여러 번 신고한 경우는 신고 횟수 1회로 처리
  let set = new Set(report);
  report = Array.from(set);

  // 1. report를 2차원배열로 변형
  // 2. 각 유저가 신고당한 횟수 cnt에 저장
  // 3. 각 유저를 신고한 유저 who에 저장
  let cnt = Array.from({ length: id_list.length }, (i) => 0);
  let who = Array.from({ length: id_list.length }, (i) => []);
  for (let i = 0; i < report.length; i++) {
    report[i] = report[i].split(" ");
    cnt[id_list.indexOf(report[i][1])]++;
    who[id_list.indexOf(report[i][1])].push(report[i][0]);
  }

  // k회 이상 신고당한 유저 확인 및 각 유저가 받은 메일 개수 mail에 저장
  let mail = Array.from({ length: id_list.length }, (i) => 0);
  for (let i = 0; i < cnt.length; i++) {
    if (cnt[i] < k) continue;
    for (let j = 0; j < who[i].length; j++) {
      mail[id_list.indexOf(who[i][j])]++;
    }
  }
  return mail;
}
