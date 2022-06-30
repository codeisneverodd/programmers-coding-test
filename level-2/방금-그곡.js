function convertString(m) {
    return m
        .replace(/C#/g, 'c')
        .replace(/D#/g, 'd')
        .replace(/F#/g, 'f')
        .replace(/G#/g, 'g')
        .replace(/A#/g, 'a');
}

function solution(m, musicinfos) {
    const listenSound = convertString(m);
    
    const map = new Map();
    for (const info of musicinfos) {
        const [start, finish, title, _score] = info.split(',');
        const duration = ((+finish.slice(0, 2) * 60) + (+finish.slice(3, 5))) - ((+start.slice(0, 2) * 60) + (+start.slice(3, 5)));
        
        const score = convertString(_score);
        const playScore = score.repeat(Math.ceil(duration / score.length)).slice(0, duration);
        if (playScore.includes(listenSound)) {
            map.set(title, {score, playScore});
        }
    }
    
    const filter = [...map.keys()].sort((a,b) => map.get(b).playScore.length - map.get(a).playScore.length);
    return filter.length >= 1 ? filter[0] : '(None)';
}