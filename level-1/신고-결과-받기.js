//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(id_list, report, k) {
    //report를 set을 이용하여 중복제거, 각 id 당 신고당한 횟수 reportedCount에 저장,
    //각 id를 신고한 사람 array를 reportedBy에 저장,
    //k번 이상 신고당한 id를 신고한 id가 받을 메일 수를 mailCount에 저장
    //answer에 mailCount에 저장된 값을 id_list와 같은 id 순서로 저장.
    const reportSet = new Set(report)
    const reportedCount = {}//{"id": Number(count)}
    const reportedBy = {}//{"id":[]}
    const mailCount = {}//{"id":Number(count)}
    id_list.forEach((element) => {//Initialization
        reportedCount[element] = 0
        mailCount[element] = 0
        reportedBy[element] = []
    })
    reportSet.forEach((element) => {
        const $id = (element.split(" "))[0]
        const $reported = (element.split(" "))[1]
        reportedCount[$reported] += 1
        reportedBy[$reported].push($id)
    })
    for (const reportedId in reportedCount) {
        if (reportedCount[reportedId] >= k) {
            reportedBy[reportedId].forEach((reporter) => {
                mailCount[reporter] += 1;
            })
        }
    }
    var answer = []
    id_list.forEach((element) => {
        answer.push(mailCount[element])
    })

    return answer
}

//정답 2 - jaewon1676
function solution(id_list, report, k) {
    
    let answer = new Array(id_list.length).fill(0)
    let report_list = {} // 신고당한 ID
    
    // key, value 형식의 report_list 객체를 만든다.
    id_list.map((user)=>{
    report_list[user] = [] //key = userid , value = 빈 배열을 가지는 객체
    })
    // report_list { muzi: [], frodo: [], apeach: [], neo: [] }

    // 유저가 신고한 ID를 report_list 객체에 넣어주기 위해 순회한다.
    report.map((user)=>{
        const [user_id, report_id] = user.split(' ') 
        // report 값에서 띄어쓰기로 구분된 문자열을 자르고 user_id, report_id로 각각 넣어준다. 
        if(!report_list[report_id].includes(user_id)){
            report_list[report_id].push(user_id)
        // 배열에 포함하는지 여부를 확인하여 포함하지 않을때 신고자의 이름을 추가하였다.
        }     

    })
    for(const key in report_list){ // report_list의 index 순회
        if(report_list[key].length >= k){
            report_list[key].map((user)=>{
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    return answer   
}