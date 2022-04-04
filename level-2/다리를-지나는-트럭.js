//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(bridge_length, weight, truck_weights) {
    let [tick, onBridge, weightOnBridge] = [0, [{weight: 0, timeToOut: 0}], 0]
    while (onBridge.length > 0 || truck_weights.length > 0) {
        if (onBridge[0].timeToOut === tick) weightOnBridge -= onBridge.shift().weight
        if (weightOnBridge + truck_weights[0] <= weight) {
            weightOnBridge += truck_weights[0]
            onBridge.push({weight: truck_weights.shift(), timeToOut: tick + bridge_length})
        } else {
            if (onBridge[0]) tick = onBridge[0].timeToOut - 1 // 시간을 줄이는 포인트
        }
        tick++
    }
    return tick
}

//정답 2 - codeisneverodd
function solution(bridge_length, weight, truck_weights) {
    const bridge = new Array(bridge_length).fill(0)
    let tick = 0
    do {
        tick++
        bridge.pop()
        bridge.reduce((a, b) => a + b) + truck_weights[0] <= weight ?
            bridge.unshift(truck_weights.shift()) : bridge.unshift(0)
    } while (bridge.reduce((a, b) => a + b) !== 0)
    return tick;
}

//정답 3 - jaewon1676
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