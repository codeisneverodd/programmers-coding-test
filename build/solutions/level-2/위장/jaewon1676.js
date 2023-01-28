function solution(clothes) {
  var answer = 1;
  var obj={};
  for(var i=0;i<clothes.length;i++){
      obj[clothes[i][1]]=(obj[clothes[i][1]] || 1) + 1;
      console.log(obj)
  }

  for(var key in obj){
      answer *= obj[key];
      console.log(answer)
  }
  
  return answer-1;
}
/* 풀이과정
1. 빈 객체(obj)생성
2. obj에 해당 키가 없으면 값을 1(옷을 입지 않은 경우)로 지정하고 1(옷의 개수)을 더해줌.
3. obj에 해당 키가 있으면 해당 키의 값을 불러오고 1을 더해줌.
4. for in 구문으로 obj의 키를 반복하여 불러오고 해당 값을 answer에 곱해줌
5. 최소한 1가지 이상의 옷을 입기 떄문에 옷을 입지 않은 경우 -1로 제외. */