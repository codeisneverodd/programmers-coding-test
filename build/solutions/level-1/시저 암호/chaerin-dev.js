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