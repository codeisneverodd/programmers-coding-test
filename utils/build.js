import * as fs from "fs";
import path from "path";
import { getTableStr, getInfoList } from "./string.js";

const __dirname = path.resolve();
const FILE_TO_UPDATE = path.resolve(__dirname, "./README.md");
const updateData = `# 프로그래머스 모든 문제 풀이
[![방문자수](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/codeisneverodd/programmers-coding-test&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=방문자수(Today/Total)&edge_flat=true)](https://github.com/codeisneverodd)

### [🔍 검색 사이트](https://programmers-solution-bank.netlify.app/)가 출시되었습니다!

🌱 모든 문제는 JavaScript로 풀이되며, 원하는 풀이는 [검색 사이트](https://programmers-solution-bank.netlify.app/)를 통해 찾으실 수 있습니다 

[🔍 프로그래머스 해설 은행 바로가기](https://programmers-solution-bank.netlify.app/) 

> #### 😁 **도움이 되셨다면** 오른쪽 상단 ↗ 의 ⭐️ **Star를 클릭**해 이 프로젝트를 응원해주세요!

[![thumbnail-coding-test-no-id](https://user-images.githubusercontent.com/54318460/158711288-5fbd903f-d3b6-4d56-bd1f-9e5946d67d0a.png)
](https://github.com/codeisneverodd/programmers-coding-test/)

## 🌟 Contributors

### 🧪 기능 구현

| Main Contributors                               | 
| ----------------------------------------------- |
| [cruelladevil](https://github.com/cruelladevil) |



### 🔥 문제 풀이

| Main Contributors                                   | 
| --------------------------------------------------- | 
| [codeisneverodd](https://github.com/codeisneverodd) | 
| [chaerin-dev](https://github.com/chaerin-dev)       | 
| [jaewon1676](https://github.com/jaewon1676)         | 
| [prove-ability](https://github.com/prove-ability)   | 
| [yongchanson](https://github.com/yongchanson)       | 

| Contributors                                |
| ------------------------------------------- |
| [createhb21](https://github.com/createhb21) |
| [le2sky](https://github.com/le2sky) |
| [ljw0096](https://github.com/ljw0096) | 
| [minjongbaek](https://github.com/minjongbaek) |

### Level 1 ✅

- 전체 문제 수: 55문제
- 풀이 문제 수: ${getInfoList(1).length}문제
- 풀이 완료 시점: 2022년 1월

| 번호 | 문제 출처 | 풀이 |
| --- | ------- | --- |
${getTableStr(1)}

### Level 2 👨🏻‍💻(풀이 중..)

- 전체 문제 수: 64문제
- 풀이 문제 수: ${getInfoList(2).length}문제
- 풀이 완료 예상 시점: 2022년 4월 중

| 번호 | 문제 출처 | 풀이 |
| --- | ------- | --- |
${getTableStr(2)}

### Level 3 👨🏻‍💻(풀이 중..)

- 전체 문제 수: 52문제
- 풀이 문제 수: ${getInfoList(3).length}문제
- 풀이 완료 예상 시점: 2022년 8월 중

| 번호 | 문제 출처 | 풀이 |
| --- | ------- | --- |
${getTableStr(3)}

### Level 4

- 전체 문제 수: 22문제
- 풀이 문제 수: ${getInfoList(4).length}문제
- 풀이 완료 예상 시점: 예정 없음

| 번호 | 문제 출처 | 풀이 |
| --- | ------- | --- |
${getTableStr(4)}

### Level 5

- 전체 문제 수: 6문제
- 풀이 문제 수: ${getInfoList(5).length}문제
- 풀이 완료 예상 시점: 예정 없음

| 번호 | 문제 출처 | 풀이 |
| --- | ------- | --- |
${getTableStr(5)}

## 🙏🏻 아직 풀리지 않은 문제의 해답을 추가해 주세요!
### 커밋 컨벤션

| 접두어   | 작업 내용                           |
| -------- | ----------------------------------- |
| solution | 풀이 추가                           |
| fix      | 모든 종류의 오류 수정                  |
| docs     | 문서 수정(코드 수정 없음)               |
| etc      | 위의 경우에 해당하는 것이 없는 경우        |

### 풀이 기여 방법

1. Fork 한 후 본인의 해설을 추가합니다.
2. 본인의 저장소에서 이곳으로 PR을 하면, 검토 및 코드리뷰 후 반영됩니다.

## 기여 시 필수 사항
1. 파일 이름은 공백이 없어야하며, 공백은 - 로 채웁니다.(문제풀이 창에서 문제 이름을 복사하여 사용하는 것을 권장드립니다

예시) 가장 먼 노드 => 가장-먼-노드.js // [1차] 뉴스 클러스터링 => [1차]-뉴스-클러스터링

2. 풀이를 추가할 시 반드시 주석을 작성하여야합니다. 기존 파일에 추가할 때는, 기존 해설들의 주석을. 새롭게 파일을 생성하실 때는 00-해답-예시.js 를 참고하시면 됩니다.

## 저작권

해당 Repository의 해답을 자신의 저작물에 추가할 수 있지만 **반드시** 본 Repository의
주소 \`https://github.com/codeisneverodd/programmers-coding-test\`
를 명시하여야합니다.
`;

fs.writeFileSync(FILE_TO_UPDATE, updateData, "utf-8");
