//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(priorities, location) {
    var answer = 0;
    let documents = priorities.map((priority, index) => ({location: index, priority: priority}))
    let locationPrinted = false
    while (!locationPrinted) {
        const shifted = documents.shift()
        let printAvailable = true
        if (documents.some((document) => shifted.priority < document.priority)) printAvailable = false
        if (printAvailable) {
            answer += 1
            if (shifted.location === location) locationPrinted = true
        } else {
            documents.push(shifted)
        }
    }
    return answer;
}

//정답 2 - codisneverodd
function solution(priorities, location) {
    var answer = 0;
    let documents = priorities.map((priority, documentLocation) => [documentLocation, priority])
    let locationPrinted = false
    while (!locationPrinted) {
        const shifted = documents.shift()
        let printAvailable = true
        for (let i = 0; i < documents.length; i++) {
            if (shifted[1] < documents[i][1]) {
                printAvailable = false
                break
            }
        }
        if (printAvailable) {
            answer += 1
            if (shifted[0] === location) locationPrinted = true
        } else {
            documents.push(shifted)
        }
    }
    return answer;
}

//정답 3 - jaewon1676
function solution(priorities, location) {
    var answer = 0;
     while(true){

        if (priorities[0] < Math.max(...priorities)){
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


// 정답 4 - createhb21
function solution(priorities, location) {
    var answer = priorities.map((priority, index) => {
      return {
        index,
        priority
      };
    });
  
    let queue = [];
    
    while(answer.length > 0){
      const first = answer.shift();
      const isPriority = answer.some((p) => p.priority > first.priority);
      isPriority ? answer.push(first) : queue.push(first);
    }
    const idx = queue.findIndex(p => p.index === location) + 1;
    return idx;
  }  