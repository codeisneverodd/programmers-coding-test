//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(s, n) {
  return s
    .split("")
    .map((element) => {
      if (element === " ") return " ";
      const code = element.charCodeAt(0);
      if ((code + n > 90 && code <= 90) || code + n > 122) {
        return String.fromCharCode(code + n - 26);
      } else {
        return String.fromCharCode(code + n);
      }
    })
    .join("");
}

//정답 2 - jaewon1676
function solution(s, n) {
  return s
    .split("")
    .map((el) => {
      if (el == " ") return el;
      let tmp = el.charCodeAt();
      return el.toLowerCase().charCodeAt() + n > 122
        ? String.fromCharCode(tmp + n - 26)
        : String.fromCharCode(tmp + n);
    })
    .join("");
}

/* 문자열 -> 아스키코드 : s.charCodeAt()
아스키코드 -> 문자열 : String.fromCharCode() 
풀이과정 
1. 배열을 문자열로 쪼개서 map 메서드로 하나씩 순회한다., 문자열이 비어있으면 리턴한다.
2. 알파벳을 통일 하기 위해 소문자 아스키코드로 변환한다. 
 대문자 아스키코드는 65가 A, 90이 Z이다.
 소문자 아스키코드는 97이 a, 122가 z이다.
3. 변환한 아스키코드 + n이 122이상이면 알파벳 단어 길이 25 + 알파벳 앞으로 이동 1만큼 뺴준고
 그렇지 않으면 그대로 더한 후 해당 아스키코드의 알파벳으로 변환해준다.
*/

//정답 3 - chaerin-dev
function solution(s, n) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") result += " ";
    else {
      let charCode = s.charCodeAt(i);
      // 원래 대문자였는데
      if (charCode <= 90) {
        charCode += n;
        // 변경 후 아스키코드값이 90보다 크다면
        if (charCode > 90) charCode -= 26;
      }
      // 원래 소문자였는데
      else {
        charCode += n;
        // 변경 후 아스키코드값이 122보다 크다면
        if (charCode > 122) charCode -= 26;
      }
      result += String.fromCharCode(charCode);
    }
  }
  return result;
}
