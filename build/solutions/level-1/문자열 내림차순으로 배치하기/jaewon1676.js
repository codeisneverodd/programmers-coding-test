function solution(s) {
  return s.split('').sort().reverse().join('')
}
// split('')은 문자열을 하나씩 쪼개주면서 타입을 배열로 변환시켜줍니다.
// 그러면 문자열 타입이 배열이 되므로 정렬을 할 수 있습니다.
// sort()는 오름차순이기때문에 다시 뒤집어서 합쳐줍니다.