function solution(s) {
  return s
    .split(" ")
    .map((el) =>
      el
        .split("")
        .map((el, index) =>
          index % 2 == 0 ? el.toUpperCase() : el.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}

/* s.split(' ') // 띄어쓰기를 기준으로 나눕니다. [ 'try', 'hello', 'world' ]
  
.map(el => el.split('')) 나눈것을 기준으로 요소 하나 하나씩 나눠줍니다 
[[ 't', 'r', 'y' ], [ 'h', 'e', 'l', 'l', 'o' ], [ 'w', 'o', 'r', 'l', 'd' ]]
  
.map((el, index) => index % 2 == 0 ? el.toUpperCase() : el.toLowerCase())
//map에서 첫번째는 앞에서 가져온 요소, 두번째는 index를 반환 합니다!
//map의 index를 기준으로 짝수인지 홀수인지 판별하여 대문자, 소문자로 변환 해줍니다.
[[ 'T', 'r', 'Y' ], [ 'H', 'e', 'L', 'l', 'O' ], [ 'W', 'o', 'R', 'l', 'D' ]]
    
.join('')  작은 배열들을 합쳐줍니다.
['TrY', 'HeLlO', 'WoRlD']
    
.join(' ') 큰 배열들을 합쳐줍니다.
"TrY HeLlO WoRlD"

대, 소문자 변환, split, reverse, join, map 등등을 활용 해야 하므로  
문자열을 연습하는데 좋은 문제입니다.
*/