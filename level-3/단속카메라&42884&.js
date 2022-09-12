//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - jaewon1676
function solution(routes) {
  let cctv = 1;  // cctv의 개수는 최소 1개
  routes.sort((a, b) => a[0] - b[0]); // 고속도로 진입 시점을 기준으로 오름차순 정렬
  // [ [ -20, -15 ], [ -18, -13 ], [ -14, -5 ], [ -5, -3 ] ]
  let out = routes[0][1]; // -15
  // 나간 시점(out)은 첫 차량의 나간시점으로 초기화
  
  for(let i = 1; i < routes.length; i++) {
    // 나간 시점(out)보다 현재 차량의 진입이 느리다면 카메라 추가 설치
    if(out < routes[i][0]) {
      cctv++;
      out = routes[i][1]; // out 시점 업데이트
    }
    
    // 나간 시점(out)이 현재 차량의 진출시점보다 큰 경우 
    if(out > routes[i][1]) {
      out = routes[i][1]; // out 시점 업데이트 
    }
  }
  
  return cctv;
}
// 그리디

// 우리는 카메라를 최소로 설치 해야합니다. 그러기 위해서는 고속도로 진입 시점을 기준으로 오름차순 정렬을(빨리 진입한 순) 합니다.
// 이렇게 되면 배열에 있는 모든 고속도로 진입 시점은 배열의 첫번째 고속도로 진입 시점보다 더 뒤에 있습니다. 그러므로 우리는 
// 나간시점만 검사 해주면 됩니다.

// 먼저 첫번째 routes의 고속도로를 빠져나간 시점을 out 변수에 담아줍니다.
// 이 out 변수를 두번째 routes의 고속도로를 빠져나간 시점과 비교하여 out 변수보다 route[i][1]가 크면 ( 나간 시간이 느리면)
// cctv를 하나 늘려줍니다. , out 변수를 갱신 하며 세번째, 네번째도 계속 비교해줍니다.