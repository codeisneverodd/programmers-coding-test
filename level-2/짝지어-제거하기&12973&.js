//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(s) {
    var answer = -1;
    let notPairStack = []
    for (let i = 0; i < s.length; i++) notPairStack[notPairStack.length - 1] === s[i] ? notPairStack.pop() : notPairStack.push(s[i])
    answer = notPairStack.length === 0 ? 1 : 0
    return answer;
}

//정답 2 - codeisneverodd
function solution(s) {
    var answer = -1;
    let notPairStack = []
    notPairStack.push(s[0])
    for (let i = 1; i < s.length; i++) {
        if (notPairStack[notPairStack.length - 1] === s[i]) {
            notPairStack.pop()
        } else {
            notPairStack.push(s[i])
        }
    }
    answer = notPairStack.length === 0 ? 1 : 0
    return answer;
}

//정답 3 - jaewon1676

function solution(s){
    let cnt = 0; // 빼준 부분을 카운트 해줍니다
    let answer;
    let stack = []
    for (let i of s){
        if (stack[stack.length - 1] === i){ // 스택의 끝부분과 i를 비교합니다
            stack.pop();
            cnt++;; 
        } else {
            stack.push(i)
        }
    }
    
    (s.length / 2 == cnt ? answer = 1 : answer = 0 ) 
    // s의 길이를 2로 나눠서 cnt 값이 된다면 문자열의 개수만큼 잘 잘라졌다는 뜻입니다
    return answer;
  }
  // 코테 1주차 5번 문제와 유사합니다. 문자열 유형을 연습하기에 좋은 문제입니다