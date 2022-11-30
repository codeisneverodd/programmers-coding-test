//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(skill, skill_trees) {
    var answer = 0;
    for (const tree of skill_trees) {
        let check = Array.from(tree).filter(x => skill.includes(x)).map(x => skill.indexOf(x))
        if (checkOrder(check)) answer += 1
    }
    return answer;
}

function checkOrder(checkArr) {
    for (let i = 0; i < checkArr.length; i++) if (checkArr[i] !== i) return false
    return true
}

//정답 2 - minkyeongJ
function solution(skill, skill_trees) {
	  //return할 변수
    var answer = 0;

    //파라미터로 받은 값을 모두 비교가능하게 쪼갬
    const skillArr = Array.from(skill);
    const skillTreesElementArr = skill_trees.map(skillTreesElement => Array.from(skillTreesElement));
    
    //스킬이 있는 위치 체크
    let checkArr = [];
    
    /** skillTreesElementArr에 있는 배열 순서대로 skillArr의 값과 비교
      * 일치하는 값은 skillArr의 배열번호로 변환하여 새로운 배열에 삽입
	    * 배열을 모두 순환했는데도 값이 일치하지 않으면 27 반환
	  */
    skillTreesElementArr.forEach((skillTreesElement, i) => {
        checkArr[i] = [];
        skillArr.forEach((skillElement, j) => {
            for(let number = 0; number < skillTreesElement.length; number++){
                if(skillTreesElement[number] === skillElement){
                    //같다면 number을 check[i]에 push
                    checkArr[i].push(number);
                    break;
                }else if(skillTreesElement.length === number+1 && checkArr[i].length === j){
                    //값을 다 비교했을 때 매칭되는 것이 없으면 27 입력
                    checkArr[i].push(27);
                }
            }
        })
    })
    
    //checkArr 배열 앞 뒤 크기 비교해서 오름차순인지 확인하기
    checkArr.forEach(checkArrElement => {
        //배열의 길이가 1일 때 answer++
        if(skill.length === 1){
            answer++;
        }
        //배열 앞 뒤 크기 비교해서 오름차순인지 확인
        for(let i = 1; i < checkArrElement.length ; i++){
            if(checkArrElement[i-1] > checkArrElement[i]){
				//오름차순이 아니면 break
                break;
            }else if(i === checkArrElement.length - 1){
				//오름차순이면 answer++;
                answer++;
            }
        }    
    });
    
    return answer;
}
