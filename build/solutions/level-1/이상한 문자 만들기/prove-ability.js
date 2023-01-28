function solution(s) {
  let answer = '';
  s.split(" ").forEach((word) => {
      for(let i = 0, len = word.length; i < len; i++) {
          if(i % 2 === 0) answer+=word[i].toUpperCase();
          else answer+=word[i].toLowerCase();
      }
      answer += " ";
  })
  answer = answer.slice(0, answer.length - 1)
  return answer;
}