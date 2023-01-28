function solution(s) {
    var answer = '';
    const arr = s.split(' ').map(x => parseInt(x, 10)).sort((a, b) => a - b)
    answer = arr[0] + ' ' + arr[arr.length - 1]
    return answer;
}