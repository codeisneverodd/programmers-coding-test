function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    
      //캐시 크기가 0인 경우는 따로 처리
    if (cacheSize === 0) return cities.length * 5;
  
    while (cities.length != 0) {
        // 맨 앞의 배열의 요소 히나를 소문자로 변환해서 city에 넣는다.
        const city = cities.shift().toLowerCase(); 
        // cities의 요소 city가 캐시 안에 있는지 비교한다. (hit or miss)
        if (cache.includes(city)) { 
            // 캐시 안에 있으면 그 위치에 있는 캐시를 빼주고,
            cache.splice(cache.indexOf(city), 1);
            // 맨 뒤로 push 해준다.
            cache.push(city);
            // cache hit
            answer += 1;
        } else { // 캐시 크기가 꽉 차있으면 캐시 맨 앞에 요소를 하나 빼준다.
            if (cache.length === cacheSize) {
                cache.shift();
            }
            // 새로운 캐시 맨 뒤로 push
            cache.push(city);
            // cache miss
            answer += 5;
        }
    }
      return answer;
  }
  /* LRU 알고리즘
  n이 배열 안에 있으면 배열 안의 n을 빼주고, 새 n을 배열의 맨 뒤로 push 한다.
  n이 배열 안에 없으면 n을 배열의 맨 뒤로 push 한다. 이때 배열의 크기 여유가 없으면
  배열에서 가장 오래된 요소를 하나 뺴준다. (arr.shift()) */
  