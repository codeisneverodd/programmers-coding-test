function solution(s) {
    let box = [0,0]
    while(s.length  > 1){
        let reamain = s.replace(/0/g,"").length
        box[0] += 1
        box[1] += (s.length - reamain)
        s = reamain.toString(2)
    }
    return box;
}
