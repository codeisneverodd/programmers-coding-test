import * as fs from "fs";
import path from "path";
import { getTableStr, getInfoList } from "./string.js";

const __dirname = path.resolve();
const FILE_TO_UPDATE = path.resolve(__dirname, "./README.md");
const updateData = `# 프로그래머스 모든 문제 풀이
[![방문자수](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/codeisneverodd/programmers-coding-test&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=방문자수(Today/Total)&edge_flat=true)](https://github.com/codeisneverodd)

🌱 프로그래머스의 [코딩테스트 문제](https://programmers.co.kr/learn/challenges?tab=all_challenges)의 문제 풀이를 찾으실 수 있습니다.

🌱 모든 문제는 JavaScript로 풀이되며, 원하는 풀이는 아래에서 검색을 통해 찾으실 수 있습니다 

[![thumbnail-coding-test-no-id](https://user-images.githubusercontent.com/54318460/158711288-5fbd903f-d3b6-4d56-bd1f-9e5946d67d0a.png)
](https://github.com/codeisneverodd/programmers-coding-test/)
## 🌟 Contributors

### 🧪 기능 구현

| Contributors                                    | Contribute Lists            | About Me |
| ----------------------------------------------- | --------------------------- | -------- |
| [cruelladevil](https://github.com/cruelladevil) | - README 자동 업데이트 구현 |          |



### 🔥 문제 풀이

| Main Contributors                                   | About Me |
| --------------------------------------------------- | -------- |
| [codeisneverodd](https://github.com/codeisneverodd) |          |
| [chaerin-dev](https://github.com/chaerin-dev)       |          |
| [jaewon1676](https://github.com/jaewon1676)         |          |
| [prove-ability](https://github.com/prove-ability)   |          |
| [yongchanson](https://github.com/yongchanson)       |          |

| Contributors                                |
| ------------------------------------------- |
| [createhb21](https://github.com/createhb21) |

## 😁 **도움이 되셨다면** 오른쪽 상단 ↗ 의 ⭐️ **Star를 클릭**해 이 프로젝트를 응원해주세요!

## Control + F 혹은 Cmd + F 를 통해 원하는 문제의 풀이를 찾아보세요!

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
| 접두어  | 작업 내용   |
| ------- | -------------------------------------------------- |
| Create  | 새로운 파일 생성 후 문제풀이 코드를 추가 할 경우   |
| Add     | 기존 파일에 문제풀이 코드를 추가 할 경우           |
| Update  | 파일의 기존 코드를 수정 할 경우                    |
| Rename  | 파일 혹은 폴더명을 수정하거나 옮기는 작업만일 경우 |
| Remove  | 파일을 삭제하는 작업만 수행한 경우                 |
| Comment | 주석 추가 및 수정의 경우                           |

### 추가 방법

1. 우측 상단의 Fork를 눌러 본인의 GitHub로 이동합니다.
2. Fork한 Repository를 \`git clone 자신이-Fork한-자신의-Repository-주소\` 를 통해 다운받습니다.
3. 해답을 해당하는 Level의 폴더에 \`00-해답-예시.js\`에 따라 생성합니다. 이때, **반드시 공백은\`-\` 바꾸어** 파일 이름을 짓습니다.
4. 자신이 Fork한 자신의 Repository에 push를 한 후, GitHub에서 Create pull request를 통해 기여합니다.
5. 해설은 검수자들의 확인이 끝나는대로 본 Repository에 반영됩니다.

## 저작권

해당 Repository의 해답을 자신의 저작물에 추가할 수 있지만 **반드시** 본 Repository의
주소 \`https://github.com/codeisneverodd/programmers-coding-test\`
를 명시하여야합니다.
`;

fs.writeFileSync(FILE_TO_UPDATE, updateData, "utf-8");
