function solution(fees, records) {
  const answer = []

  const parkingTable = getParkingTable(records)
  const sortedKeys = Object.keys(parkingTable).sort()

  for (const targetCar of sortedKeys) {
    if (parkingTable[targetCar].length % 2 === 1) {
      parkingTable[targetCar].push(['23:59', 'OUT'])
    }
    const totalTime = getTotalTime(parkingTable, targetCar)
    const fee = calculateFee(totalTime, fees)
    answer.push(fee)
  }

  return answer
}

function getParkingTable(records) {
  const parkingTable = {}

  records.forEach((val) => {
    const info = val.split(' ')
    if (Object.keys(parkingTable).includes(info[1])) {
      parkingTable[info[1]].push([info[0], info[2]])
    } else {
      parkingTable[info[1]] = [[info[0], info[2]]]
    }
  })

  return parkingTable
}

function getTotalTime(parkingTable, targetCar) {
  let totalTime = 0
  for (let i = 0; i < parkingTable[targetCar].length - 1; i += 2) {
    totalTime += calculateTotalTime(
      parkingTable[targetCar][i][0],
      parkingTable[targetCar][i + 1][0]
    )
  }
  return totalTime
}

function calculateTotalTime(time1, time2) {
  const [hour1, minute1] = time1.split(':').map((val) => parseInt(val))
  const [hour2, minute2] = time2.split(':').map((val) => parseInt(val))

  return hour2 * 60 + minute2 - (hour1 * 60 + minute1)
}

function calculateFee(totalTime, feeInfo) {
  let fee = 0
  if (feeInfo[0] >= totalTime) {
    fee = feeInfo[1]
  } else {
    fee =
      feeInfo[1] + Math.ceil((totalTime - feeInfo[0]) / feeInfo[2]) * feeInfo[3]
  }
  return fee
}
