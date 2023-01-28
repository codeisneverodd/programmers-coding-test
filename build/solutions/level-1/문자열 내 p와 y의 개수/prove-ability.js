function solution(s){
  // 배열로 변환    
  s = s.split("");
  // filter 를 사용해 갯수 추출
  const pCount = s.filter((v) => v === "p" || v === "P").length;
  const yCount = s.filter((v) => v === "y" || v === "Y").length;
  return pCount === yCount;
}