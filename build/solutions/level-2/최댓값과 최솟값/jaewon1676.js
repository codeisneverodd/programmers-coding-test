function solution(s) {
    s = s.split(' ')
    s.sort((a, b) => {return a - b}) // 오름차순 정렬
    let small = s[0] // s의 최솟값
    let large = s[s.length - 1] // s의 최댓값
    return (small + ' ' + large)
}