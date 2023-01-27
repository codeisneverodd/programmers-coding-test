
function solution(s) {
    return s.toLowerCase().split(" ").map(x=>x[0] ? x[0].toUpperCase() + x.substring(1) : "").join(" ");
}

// 이 문제에서 제일 핵심은 "공백문자가 연속해서 나올 수 있습니다." 입니다.  이 부분을 꼭 고려하셔야합니다. 
// 왜냐하면 공백이 연속으로 있으면 split할때 공백이 포함되기에 그 공백이 마침 x[0]이 되어버리면 undefined.toUpperCase()가 되기에 런타임에러가 뜹니다.
// 따라서 저는 풀때 당시 몰랐지만 chartAt()을 사용하는 것도 좋은 방법중 하나라고 생각합니다. 
//그게 아니라 이 코드로 한다면 꼭 undefined인 경우를 처리하는 코드를 추가해줘야합니다.
