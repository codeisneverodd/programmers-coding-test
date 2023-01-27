function solution(priorities, location) {
    var answer = 0;
    while (true) {

        if (priorities[0] < Math.max(...priorities)) {
            if (location - 1 < 0) location = priorities.length
            priorities.push(priorities.shift())
            location--;
        } else {
            answer++;
            if (location - 1 < 0) {
                return answer;
            }
            priorities.shift()
            location--;
        }
        console.log(priorities, location, answer)

    }
    return answer
}

