//정답 1 - pereng11
// 다익스트라 + 최소힙 O( N * logN ) 
function solution ( N, road, K )
{
    // [목적지, 거리] 노드를 값으로 가지는, 거리에 대한 최소힙 
  class MinHeap{
      constructor ()
      {
        this.heap = [ null ];
      }
      // 맨 끝에 노드를 삽입 후 위로 올라가면서 정렬
      push ( val )
      {
            this.heap.push(val);
            let childIdx = this.heap.length-1;
            let parentIdx = Math.floor(childIdx / 2);
            while(parentIdx > 0 && this.heap[parentIdx][1] > this.heap[childIdx][1]){
              this.swap( childIdx, parentIdx );
              childIdx = parentIdx;
              parentIdx = Math.floor(childIdx / 2);
            }
      }
      pop ()
      {
        if ( this.heap.length === 1 )
        {
          return undefined;
        }
        // 최소값은 빼두었다가 리턴하고, 가장 끝 값을 맨 위로 가져와 아래로 내려가면서 정렬
        const minNode = this.heap[ 1 ];
        this.heap[ 1 ] = this.heap[ this.heap.length - 1 ];
        this.heap.pop();
        let parentIdx = 1;
        let leftChildIdx = 2;
        let rightChildIdx = 3;
        while ( parentIdx < this.heap.length )
        {
          // 자식이 없는 경우 
          if ( !this.heap[ leftChildIdx ] )
          {
            break;
          } // 왼쪽 자식만 있는 경우
          else if ( !this.heap[ rightChildIdx ] )
          {
            if ( this.heap[ parentIdx ][ 1 ] > this.heap[ leftChildIdx ][ 1 ] )
            {
              this.swap( parentIdx, leftChildIdx );
            }
            break;
            // 둘 중 하나가 부모보다 작을 때, 더 작은 쪽으로 정렬
          } else if ( this.heap[ parentIdx ][ 1 ] > this.heap[ leftChildIdx ][ 1 ] || this.heap[ parentIdx ][ 1 ] > this.heap[ rightChildIdx ][ 1 ] )
          {
            const minChildIdx = this.heap[ leftChildIdx ][ 1 ] < this.heap[ rightChildIdx ][ 1 ] ? leftChildIdx : rightChildIdx;
            this.swap( parentIdx, minChildIdx );
            parentIdx = minChildIdx;
            leftChildIdx = parentIdx * 2
            rightChildIdx = parentIdx * 2 + 1;
          } else
          {
            // 끝까지 내려가지 않았더라도 부모가 가장 작으면 정렬 중지
            break;
          }
        }
        return minNode;
      }
      swap ( idx1, idx2 )
      {
          [ this.heap[ idx1 ], this.heap[ idx2 ] ] = [ this.heap[ idx2 ], this.heap[ idx1 ] ];
      }
      length ()
      {
        return this.heap.length;
      }
  }
  

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
    const visited = new Array( N + 1 ).fill( false ); //방문 확인 배열
    const dist = new Array( N + 1 ).fill( Infinity ); //목표지점까지 거리
    const heap = new MinHeap();

    //시작점 삽입
    heap.push( [sp, 0] );

    // 가장 가까운 목적지부터 순서대로 방문
    while ( heap.length() > 1 )
    {
      //힙에 저장된 목적지 중 가장 가까운 거리의 목적지를 꺼냄 [목적지, 거리]
      const [ ep, val ] = heap.pop();
      //아직 방문하지 않은 곳만 처리
      if ( !visited[ ep ] )
      {
        //방문처리, 거리 저장
        visited[ ep ] = true;
        dist[ ep ] = val;
        //방문 지점을 거쳐서 가는 다른 목적지 구하기
        const nexts = roadsTable[ ep ];
        if ( nexts )
        {
          nexts.forEach( n =>
          {
            let [ nextEp, nextVal ] = n;
            if ( !visited[ nextEp ] ) //아직 방문하지 않은 곳일 경우, '지금까지의 거리 + 현재 위치에서의 거리'로 힙에 삽입
            {
              heap.push( [ nextEp, val + nextVal ] );
            }
          })
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

//정답 2 - pereng11 O(N * N);
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