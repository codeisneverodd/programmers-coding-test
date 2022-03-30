//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(lottos, win_nums) {
  const zeroCount = lottos.filter((e) => e === 0).length
  const matchCount = win_nums.filter((e) => lottos.includes(e)).length
  const matchToRank = [6, 6, 5, 4, 3, 2, 1]
  const lowRank = matchToRank[matchCount]
  const highRank = zeroCount === 6 ? 1 : matchToRank[matchCount + zeroCount]

  var answer = [highRank, lowRank]
  return answer
}

//정답 2 - codeisneverodd
function solution(lottos, win_nums) {
  // 0이 없는 경우 > 최저 순위 ==  최고 순위
  // 0이 있는 경우 > 모두 0인경우 > 1위
  //            > 0이 아닌 수가 있는 경우 > 최저 순위 - (0의 개수) = 최고순위
  // 0이 있는 경우 0만 중복이 가능하므로, 0의 개수를 (배열 길이 - 집합 길이 + 1)를 통해 구함.
  // 순위는 7 - hit
  // 최종적으로 7위인 경우 6위로 변경
  var answer = []
  if (lottos.indexOf(0) === -1) {
    answer[0] = answer[1] = 7 - hit(lottos, win_nums)
  } else {
    const zeroCount = lottos.length - [...new Set(lottos)].length + 1
    answer[1] = 7 - hit(lottos, win_nums)
    zeroCount === 6 ? (answer[0] = 1) : (answer[0] = answer[1] - zeroCount)
  }
  for (let i = 0; i < 2; i++) {
    answer[i] >= 7 ? (answer[i] = 6) : null
  }
  return answer
}

function hit(lottos, win_nums) {
  let result = 0
  lottos.forEach((element) => {
    win_nums.indexOf(element) === -1 ? null : (result += 1)
  })
  return result
}

// 정답 3 - jaewon1676
function solution(lottos, win_nums) {
  var answer = []
  const correct = lottos.filter((lotto) => win_nums.includes(lotto)).length
  // lottos배열을 순회하며 당첨배열에 있는 수를 return 하고 총 개수를 correct에 저장

  const zeros = lottos.filter((lotto) => lotto === 0).length
  // lottos배열을 순회하며 0인 총 개수를 zeros에 저장

  let min = 7 - correct >= 6 ? 6 : 7 - correct

  let max = min - zeros < 1 ? 1 : min - zeros

  answer = [max, min]

  return answer
}

// 정답 4 - jaewon1676
function solution(lottos, win_nums) {
  var answer = []
  let max = 7
  let min = 7
  console.log(lottos)
  console.log(win_nums)
  for (let i = 0; i < 6; i++) {
    if (lottos.includes(win_nums[i])) {
      max--
    }
  }
  min = max
  for (let i = 0; i < 6; i++) {
    if (lottos[i] == 0) min--
  }
  if (max == 7) max = 6
  if (min == 7) min = 6
  answer = [min, max]
  return answer
}

//정답 5 - yongchanson
function solution(lottos, win_nums) {
  //최고당첨개수 : maxPoint + basicPoint
  //최저당첨개수 : basicPoint

  let basicPoint = 0
  let maxPoint = 0
  let answer = []

  lottos.forEach(function (lottos_item) {
    win_nums.forEach(function (win_nums_item) {
      if (lottos_item == win_nums_item) {
        basicPoint++
      }
    })
  })

  lottos.forEach(function (item) {
    if (item == 0) {
      maxPoint++
    }
  })

  maxPoint + basicPoint >= 2
    ? answer.push(7 - maxPoint - basicPoint)
    : answer.push(6)
  basicPoint >= 2 ? answer.push(7 - basicPoint) : answer.push(6)

  return answer
}

//정답 6 - prove-ability
function solution(lottos, win_nums) {
  // 맞춘 수와 0의 갯수 활용할 변수 0으로 초기화
  let winCount = 0
  let zeroCount = 0
  // 내 로또 번호 하니씩 접근
  lottos.forEach((num) => {
    // 번호가 0이 아니고 당첨 번호라면
    if (num !== 0 && win_nums.includes(num)) {
      winCount++
      // 번호가 0이라면
    } else if (num === 0) {
      zeroCount++
    }
  })
  // 일치한 수와 등수는 반비례하기 때문에 빼기 7
  // 이때 등수를 벗어나면 낙첨(6) 으로 고정
  let max = 7 - (winCount + zeroCount)
  if (max > 5) max = 6
  let min = 7 - winCount
  if (min > 5) min = 6

  return [max, min]
}
