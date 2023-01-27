//shift를 사용하지 않고 queue를 구현한 풀이를 추가합니다.
function solution(priorities, location) {
    let answer = 0;
    const printer = new Queue;
    priorities.forEach((priority, index) => {
        printer.enqueue([priority, index])
    })
    while (printer.size() > 0) {
        const check = printer.dequeue()
        const countHigherPriority = printer.queue.filter(x => x[0] > check[0]).length
        if (countHigherPriority > 0) {
            printer.enqueue(check)
        } else {
            answer += 1
            if (check[1] === location) break
        }

    }
    return answer;
}

class Queue {
    constructor() {
        this.queue = []
        this.front = 0
        this.rear = 0
    }

    enqueue(value) {
        this.queue[this.rear++] = value
    }

    dequeue() {
        const value = this.queue[this.front]
        delete this.queue[this.front]
        this.front += 1
        return value
    }

    peek() {
        return this.queue(this.front)
    }

    size() {
        return this.rear - this.front
    }
}
