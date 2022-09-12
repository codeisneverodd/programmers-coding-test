//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(x) {
  const sum = x
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((acc, curr) => acc + curr);
  return x % sum === 0;
}

//정답 2 - chaerin-dev
function solution(x) {
  // x의 각 자리에 접근하기 위해 x를 문자열로 변환
  let x_str = x.toString();
  // 각 자릿수의 합을 저장할 변수
  let sum_of_digits = 0;
  // x_str의 각 문자를 숫자로 바꿔 sum_of_digits에 더해줌
  for (let i = 0; i < x_str.length; i++) {
    sum_of_digits += Number(x_str[i]);
  }
  // x가 각 자릿수의 합으로 나누어떨어지는지 여부 반환
  return x % sum_of_digits == 0;
}

//정답 3 - jaewon1676
function solution(x) {
  let sum = 0;
  let arr = String(x).split(""); // 숫자를 하나씩 분리한다.

  for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]); // 각 숫자를 더해준다.
  }

  return x % sum == 0 ? true : false; // 자릿수의 합으로 x가 나누어지면 하샤드 수
}

//정답 4 - prove-ability
function solution(x) {
  var answer = true;
  // 모든 자릿수의 합을 구한다
  const sum = x
    .toString()
    .split("")
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  // x가 자릿수의 합으로 나누어떨어지지 않는다면 false 반환
  if (x % sum !== 0) return false;
  return answer;
}
