function solution(bridge_length, weight, truck_weights) {
    var answer = 0; // 총 걸리는 시간
    let bridge = []; // 다리를 건너는 트럭
    let bridge_weight = 0; // 다리를 건너는 트럭의 총 무게
    
    while (truck_weights.length > 0) { // 대기 트럭이 없을때까지 반복한다.
        answer++;  // 1초 추가
        if (bridge.length == bridge_length) { // 다리가 가득 차있으면 제일 먼저 들어간 트럭을 뺴준다.
            bridge_weight -= bridge.shift();
        }
        if (bridge_weight + truck_weights[0] > weight) { 
            bridge.push(0);
            continue;
        }
        let truck_weight = truck_weights.shift();
        bridge.push(truck_weight);
        bridge_weight += truck_weight;
    }
  
    answer += bridge_length;
  
    return answer;
  }