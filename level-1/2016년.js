//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
function solution(a, b) {
    var answer = '';
    let count = 0
    const day = ['SUN', 'MON', 'TUE', 'WED', 'THU','FRI', 'SAT']
    const month = [0,31,29,31,30,31,30,31,31,30,31,30,31]
    for(let i=1; i<a; i++) count += month[i]
    count += b
    answer = day[(count+4)%7]

    return answer;
}