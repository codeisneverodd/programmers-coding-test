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