function solution(s, n) {
  var answer = '';
  for(let i = 0, len = s.length; i < len; i++) {
      if(s[i] === " ") {
          answer += " ";
          continue;
      }
      let index = s[i].charCodeAt();
      // 65 - 90
      // 97 - 122
      if(index <= 90 && index + n > 90) index -= 26;    
      else if (index + n > 122) index -= 26;
      
      answer += String.fromCharCode(index + n)
  }
  return answer;
}

