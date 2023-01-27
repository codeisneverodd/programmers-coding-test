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

