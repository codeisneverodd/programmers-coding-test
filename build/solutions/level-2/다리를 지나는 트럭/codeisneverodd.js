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