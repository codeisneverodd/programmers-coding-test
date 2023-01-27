//다익스트라 + 선형탐색
function solution ( N, road, K )
{  
  const roadsTable = {}; //전체 도로 정보
  
  // 도로 정보 초기화 roadTable[시작점] = [목적지, 거리] 배열
  for ( let i = 1; i <= N; i++ )
  {
    roadsTable[ i ] = [];
  }
  road.forEach( road =>
  {
    let [ sp, ep, dist ] = road;
    roadsTable[ sp ].push( [ ep, dist ] );
    roadsTable[ ep ].push( [ sp, dist ] );
  } );

  function djikstra ( sp )
  {
    const dist = new Array( N + 1 ).fill( Infinity ); //목표지점까지 거리
    const queue = [];

    queue.push( [sp, 0] );

    while ( queue.length > 0 )
    {
      const [ ep, val ] = queue.shift();
      if ( dist[ ep ] > val )
      {
        dist[ ep ] = val;
        const nexts = roadsTable[ ep ];
        if ( nexts )
        {
          nexts.forEach( n =>
            {
              let [ nextEp, nextVal ] = n;
              //거리가 더 줄어드는 경우, '지금까지의 거리 + 현재 위치에서의 거리'로 힙에 삽입
              if ( dist[ nextEp ] > val + nextVal )
              {
                queue.push( [ nextEp, val + nextVal ] );
              }
            } );
          }
      }
    }
      // 거리가 K이하인 지점의 개수 반환
    const result = dist.filter( d => d <= K ).length;
    return result;
  }
  
  const answer = djikstra( 1 );
  return answer;
}