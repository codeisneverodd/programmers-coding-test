//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(s) {
    var answer = 0;
    let answerString = s
    const stringToNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for (let i = 0; i < 10; i++) {
        answerString = answerString.split(stringToNum[i]).join(i)
    }
    answer = Number(answerString)
    return answer;
}

//정답 2 - codeisneverodd
function solution(s) {
    var answer = 0;
    let answerString = s
    const stringToNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for (let i = 0; i < 10; i++) {
        const regex = new RegExp(stringToNum[i], 'g')
        answerString = answerString.replace(regex, i)
    }
    answer = Number(answerString)
    return answer;
}

//정답 3 - jaewon1676
function solution(s) {
    let answer = 0;
    
    s = s.replace(/zero/g, 0);
    s = s.replace(/one/g, 1);
    s = s.replace(/two/g, 2);
    s = s.replace(/three/g, 3);
    s = s.replace(/four/g, 4);
    s = s.replace(/five/g, 5);
    s = s.replace(/six/g, 6);
    s = s.replace(/seven/g, 7);
    s = s.replace(/eight/g, 8);
    s = s.replace(/nine/g, 9);
    
    answer = Number(s);
    return answer;
}