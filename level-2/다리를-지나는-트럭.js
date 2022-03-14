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