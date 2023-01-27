//코드 참고자료: https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.4-%EB%8B%A8%EC%96%B4-%ED%8D%BC%EC%A6%90
function solution(strs, t) {
  const tLength = t.length; //자주 쓰는 값 미리 계산
  //Infinity 로 선언을 해야 조합이 불가능한 영역의 값을 무한으로 두고, 그 영역에 하나를 더해도 불가능하다는 것을 Infinity로 표현할 수 있게 된다.
  const minCountToIndex = new Array(tLength).fill(Infinity);
  for (let currentIndex = 0; currentIndex < tLength; currentIndex++) {
    //내가 검사할 부분은 t의 0~currentIndex 영역
    const currentSlice = t.slice(0, currentIndex + 1);
    for (const str of strs) {
      //현재 영역이 strs에 있는 조각들 중 하나로 끝난다면
      if (currentSlice.endsWith(str)) {
        //frontLength 는 str 조각을 제외한 앞 쪽의 남은 조각의 길이
        const frontLength = currentIndex - str.length + 1;
        if (frontLength === 0) {
          //앞쪽에 남은 것이 없다면, 현재 검사중인 영역 = strs에 있는 조각
          minCountToIndex[currentIndex] = 1;
        } else {
          //앞쪽에 남은 것이 있다면, 현재 검사중이 영역까지 필요한 조각 수는, 지금까지 구한 최소 값과 지금 구한 값 중 최소값
          minCountToIndex[currentIndex] = Math.min(minCountToIndex[currentIndex], minCountToIndex[frontLength - 1] + 1);
        }
      }
    }
  }
  //마지막 영역이 Infinity 이면 만들기 불가능한 단어, 아니라면 마지막 영역의 값을 리턴
  return minCountToIndex[tLength - 1] === Infinity ? -1 : minCountToIndex[tLength - 1];
}

//리드미 테스트용 코멘트
