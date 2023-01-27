function solution(n, lost, reserve) {
  // 학생들의 체육복 개수를 저장할 배열 students
  // 학생의 index가 1번부터 시작하므로 배열의 길이를 n+1로 설정
  // 0번 학생은 실제로는 없지만 초기값을 1로 설정하면 이후 연산에 영향을 미치지 않음
  const students = Array.from({ length: n + 1 }, () => 1);

  // 체육복 분실/여분 정보 students 배열에 반영
  lost.forEach((lostStudent) => students[lostStudent]--);
  reserve.forEach((reserveStudent) => students[reserveStudent]++);

  // 체육복이 없어 체육 수업을 들을 수 없는 학생 수를 저장할 변수 cnt
  let cnt = 0;
  students.forEach((student, i) => {
    // 현재 인덱스의 학생이 체육복이 없다면
    if (student === 0) {
      // 바로 앞 학생이 체육복 여분이 있다면
      if (students[i - 1] === 2) {
        // 바로 앞 학생에게 체육복 빌리기
        students[i - 1]--;
        student++;
      }
      // 바로 앞 학생에게 체육복을 빌리지 못했고, 바로 뒤 학생이 체육복 여분이 있다면
      else if (students[i + 1] === 2) {
        // 바로 뒤 학생에게 체육복 빌리기
        students[i + 1]--;
        student++;
      }
      // 바로 앞 학생과 바로 뒤 학생 모두에게 체육복을 빌리지 못했다면 체육 수업을 들을 수 없음
      else cnt++;
    }
  });

  // 체육 수업을 들을 수 있는 학생 수 = 전체 학생 수 - 체육 수업을 들을 수 없는 학생 수
  return n - cnt;
}