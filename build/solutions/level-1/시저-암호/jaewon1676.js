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

