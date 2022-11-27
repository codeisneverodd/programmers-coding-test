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

//정답 2 - codeisneverodd
//Map과 고차함수를 적극적으로 이용한 풀이
function solution(genres, plays) {
    const genreMap = new Map(); // {genre:{totalPlay:number, songs:[{play:number, id:number}, ...]}
    genres
        .map((genre, id) => [genre, plays[id]])
        .forEach(([genre, play], id) => {
            const data = genreMap.get(genre) || {totalPlay: 0, songs: []}
            genreMap.set(genre, {
                totalPlay: data.totalPlay + play,
                songs: [...data.songs, {play: play, id: id}]
                    .sort((a, b) => b.play - a.play)
                    .slice(0, 2)
            })
        })

    return [...genreMap.entries()] //entries => [[genre, {totalPlay, songs}], ...]
        .sort((a, b) => b[1].totalPlay - a[1].totalPlay)
        .flatMap(item => item[1].songs) // [[songs], [songs]] => [songs, songs]
        .map(song => song.id)
}