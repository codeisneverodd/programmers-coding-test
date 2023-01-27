function solution(strings, n) {
  // 정렬
  strings.sort((a, b) => {
      // n번째 클자가 같다면 사전순
      if(a[n].charCodeAt() === b[n].charCodeAt()) {
          return a > b ? 1 : -1;
      } else return a[n].charCodeAt() - b[n].charCodeAt();
  });
  
  return strings;
}
