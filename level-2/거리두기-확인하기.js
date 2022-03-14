//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(places) {
    var answer = [];
    answer = places.map(place => {
        return place.some((row, rowIndex) =>
            row.split('').some((mark, colIndex, rowArr) => {
                if (mark === 'X') return false
                const countPeopleAround = [
                    rowArr[colIndex - 1] || '',
                    rowArr[colIndex + 1] || '',
                    (place[rowIndex - 1] || '')[colIndex],
                    (place[rowIndex + 1] || '')[colIndex],
                ].filter(mark => mark === 'P').length
                return (mark === 'P' && countPeopleAround > 0) || (mark === 'O' && countPeopleAround > 1)
            })
        ) ? 0 : 1
    })
    return answer;
}