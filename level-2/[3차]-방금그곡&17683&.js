// https://github.com/codeisneverodd/programmers-coding-test
// 완벽한 정답이 아닙니다.
// 정답 1 - minjongbaek
function convertString(m) { // 문자열 m에 #이 붙은 음이 있다면 #을 제거하고 소문자로 변경한 후 반환하는 함수
    return m
        .replace(/C#/g, 'c')
        .replace(/D#/g, 'd')
        .replace(/F#/g, 'f')
        .replace(/G#/g, 'g')
        .replace(/A#/g, 'a');
}

function solution(m, musicinfos) {

    // 네오가 기억하고 있는 멜로디가 라디오에서 재생됐는지 확인해야합니다.
    // 재생시간이 길면 악보의 멜로디가 반복되어 재생되고, 짧다면 중간에 끊어지게 됩니다.
    // #이 붙은 음은 2자리를 차지하기 때문에 #이 붙은 음을 어떻게 처리할지가 중요합니다.

    const listenSound = convertString(m); // #이 붙은 음을 다른 문자로 변환합니다.
    
    const map = new Map(); // 조건에 일치하는 음악 정보를 저장할 map 변수를 선언합니다.
    for (const info of musicinfos) {
        const [start, finish, title, _score] = info.split(',');
        // 음악 재생이 끝난 시각과 재생된 시각의 차를 구하여 재생시간을 구합니다.
        const duration = ((Number(finish.slice(0, 2)) * 60) + (Number(finish.slice(3, 5)))) - ((Number(start.slice(0, 2)) * 60) + (Number(start.slice(3, 5))));
        
        const score = convertString(_score); // 악보의 멜로디에서 #이 붙은 음을 다른 문자로 변환합니다.

        // 재생된 멜로디를 구합니다.
        // 각 음이 1분에 1개씩 재생되므로, repeat() 메서드를 사용하여 재생시간을 악보의 길이로 나눈 몫 만큼 반복합니다.
        // slice() 메서드로 재생시간을 넘어가는 멜로디는 제외합니다.
        const playScore = score.repeat(Math.ceil(duration / score.length)).slice(0, duration);
        if (playScore.includes(listenSound)) { // 들은 멜로디가 재생된 멜로디에 포함되어 있다면 map에 저장한다.
            map.set(title, {score, playScore});
        }
    }
    
    // 조건에 일치하는 음악이 여러개인 경우 재생된 시간이 제일 길고 먼저 입력된 음악 제목을 반환합니다.
    // map 객체는 삽입에 대한 순서를 기억하므로 재생된 시간이 제일 긴 음악부터 내림차순으로 정렬합니다.
    const filter = [...map.keys()].sort((a,b) => map.get(b).playScore.length - map.get(a).playScore.length);
    return filter.length >= 1 ? filter[0] : '(None)'; // 결과가 없다면 '(None)'을 반환하고, 그렇지 않다면 첫 번째 요소를 반환합니다.
}