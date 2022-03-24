//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(genres, plays) {
    var answer = [];
    const songs = []
    const genreSumHash = {}
    const genreSumArr = []

    //고유번호, 장르, 플레이수를 담은 songs
    genres.forEach((genre, id) => {
        songs.push({id: id, genre: genre, play: plays[id]})
        genreSumHash[genre] = genreSumHash[genre] === undefined ? plays[id] : genreSumHash[genre] + plays[id]
    })

    //장르별 플레이수 합으로 정렬하기 위해 생성한 배열 genreSumArr
    for (const genre in genreSumHash) genreSumArr.push([genre, genreSumHash[genre]])
    genreSumArr.sort((a, b) => b[1] - a[1])

    //각 장르안에서 각 노래의 play수가 높은 순으로 정렬하고 앞에서부터 2개까지 정답에 고유번호를 push
    for (const genre of genreSumArr) {
        const sorted = songs.filter(song => song.genre === genre[0]).sort((a, b) => b.play - a.play)
        for (let i = 0; i < 2 && i < sorted.length; i++) answer.push(sorted[i].id)
    }
    return answer;
}