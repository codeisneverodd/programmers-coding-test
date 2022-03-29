//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(tickets) {
    const routes = [] //최종 가능 루트들을 담을 배열
    const makeRoutes = (currentDepart, remainTickets, currentRoute) => {
        //현재 출발지, 남은 티켓들, 현재 까지 만든 루트를 기반으로 경로를 만들어 가는 재귀 함수
        if (remainTickets.length > 0) {
            remainTickets.forEach(([depart, nextDepart], index) => {
                if (depart === currentDepart)
                    //현재 출발지와 같은 출발지를 가진 티켓이 있다면, 해당 티켓을 사용하고 해당 티켓의 도착지를 다음 출발지로 지정
                    makeRoutes(
                        nextDepart,
                        [...remainTickets.slice(0, index), ...remainTickets.slice(index + 1)],
                        [...currentRoute, currentDepart])
            })
        } else {
            //티켓을 모두 사용하면 최종 가능 루트에 포함
            routes.push([...currentRoute, currentDepart])
        }
    }
    makeRoutes("ICN", tickets, [])
    return routes.sort()[0]
}