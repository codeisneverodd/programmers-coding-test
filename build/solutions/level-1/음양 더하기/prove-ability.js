function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((absolute, i) => {
        if(!signs[i]) absolute *= -1;
        answer += absolute;
    })
    return answer;
}