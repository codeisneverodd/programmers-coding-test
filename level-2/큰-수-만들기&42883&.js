//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(number, k) {
    var answer = '';
    let answerStack = [0]
    let deleteCount = -1
    for (let i = 0; i < number.length; i++) {
        while (deleteCount < k && number[i] > answerStack[answerStack.length - 1]) {
            answerStack.pop()
            deleteCount++
        }
        if (answerStack.length < number.length - k) answerStack.push(number[i])
    }
    answer = answerStack.join('')
    return answer;
}

//정답 4 - jaewon1676
function solution(number, k) {
    const stack = [];
    let answer = '';
  
    for(let i=0; i<number.length; i++){
      const el = number[i]; 
      while(k > 0 && stack[stack.length-1] < el){
        stack.pop();
        k--;
      }
      stack.push(el);
    }
    stack.splice(stack.length-k, k);
    answer = stack.join("");
    return answer;
}
  