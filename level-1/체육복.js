//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(n, lost, reserve) {
  let answer = 0;
  let studentClothes = new Array(n + 2).fill(1);
  for (const student of reserve) studentClothes[student] += 1;
  for (const student of lost) studentClothes[student] -= 1;
  for (let i = 1; i < n + 1; i++) {
    if (studentClothes[i] === 0) {
      if (studentClothes[i - 1] === 2 || studentClothes[i + 1] === 2) {
        if (studentClothes[i - 1] === 2) {
          studentClothes[i - 1] -= 1;
          studentClothes[i] += 1;
        } else {
          studentClothes[i + 1] -= 1;
          studentClothes[i] += 1;
        }
      }
    }
  }
  for (const student of studentClothes) {
    answer += student > 0 ? 1 : 0;
  }
  answer -= 2;
  return answer;
}

//정답 2 - prove-ability
function solution(n, lost, reserve) {
  // students 초기화 - 학생들은 체육복 개수 1로 초기화
  let students = Array.from({ length: n }).fill(1);

  // 읽어버린 학생 개수 반영
  lost.forEach((target) => {
    students[target - 1]--;
  });

  // 여별 체육복 개수 반영
  reserve.forEach((target) => {
    students[target - 1]++;
  });

  // 학생들 순차적으로 접근
  for (let i = 0, len = students.length; i < len; i++) {
    // 체육복 0 | 1 을 가진 학생들을 대여 불가능이기 때문에 continue
    if (students[i] === 0 || students[i] === 1) continue;
    // 이전 번호의 학생이 있고 그 학생이 0개의 체육복을 가졌다면
    if (i !== 0 && students[i - 1] === 0) {
      // 이전 학생 증가
      students[i - 1]++;
      // 자신은 대여해줬으니 감소
      students[i]--;
    }
    // 인덱스 학생이 1개 초과한 체육을 가지고 다음 번호의 학생이 있고 그 학생이 0개의 체육복을 가졌다면
    if (students[i] > 1 && i + 1 !== len && students[i + 1] === 0) {
      // 다음 학생 증가
      students[i + 1]++;
      // 자신은 대여해줬으니 감소
      students[i]--;
    }
  }
  // 체육복 1개 이상을 가진 학생들의 수 반환
  return students.filter((v) => v >= 1).length;
}

//정답 3 - jaewon1676
function solution(n, lost, reserve) {
    let answer = Array(n).fill(1) // n만큼의 배열을 만들어서 1을 만들어줍니다
    let cnt = 0;
    for(let i = 0; i < reserve.length; i++){ // reserve 를 순회하며 체육복
        answer[reserve[i]-1] += 1
    }
    for(let i = 0; i < lost.length; i++){ // lost 를 순회하며 체육복 수를 -1
        answer[lost[i]-1] -= 1
    }
    for(let i = 0; i < n; i++){ // n을 순회하며 앞사람과 뒷사람의 체육복 수를 비교한다.
        if (answer[i] == 2 && answer[i+1] == 0 || answer[i+1] == 2 && answer[i] == 0){
            answer[i] = 1
            answer[i+1] = 1
        }
    }
    for(let i = 0; i < answer.length; i++){
        (answer[i] >= 1 ? cnt += 1 : null)
    }
    return cnt
  }
  //그리디
  // lost 배열과 reserve 배열을 순회하여 체육복을 추가, 제거 해줍니다.
  // 그 후에 최종적으로 i부터 n까지 for문을 순회하며 i번쨰 학생과 i+1번째의 학생이 가진 체육복 수를 비교하여 빌려 줄 수 있는지, 빌려줄 수 없는지 확인 합니다.
