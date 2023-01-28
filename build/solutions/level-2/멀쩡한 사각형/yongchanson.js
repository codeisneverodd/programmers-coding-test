function solution(w,h){
    const slope = h / w;
    let cnt = 0;
    //대각선 아래에 위치한 도형의 개수를 구합니다.
    //대각선과 만나는 도형을 포함하기 위해 ceil을 사용합니다.
    for(let i = 1; i <= w; i++){
        cnt += Math.ceil(slope * i);
    }
    //대각선 위에 위치한 도형의 개수 * 2을 리턴합니다.
    return ((w*h - cnt) * 2);
}