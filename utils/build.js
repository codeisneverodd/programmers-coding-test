//변동 사항이 있으면 => README UPDATE, 형식 맞지 않는 것 rename
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import fs from 'fs';

const COURSE_URL = 'https://programmers.co.kr/learn/courses/30';
const levels = [0, 1, 2, 3, 4, 5];

const createAPI = () => {
  const splitCodeToSolutions = code => {
    if (code === undefined) return [];
    const solutions = code.split(/\/\/[ ]*정답/);
    return [solutions[0], ...solutions.slice(1).map(solution => '//' + solution)];
  };

  const formatName = (() => {
    const nameExceptions = [
      ['-', ' '],
      ['&#63;', '?'],
    ];

    return name => {
      nameExceptions.forEach(([a, b]) => (name = name.replaceAll(a, b)));
      return name;
    };
  })();

  const nameExceptions = ['00-해답-예시.js'];

  try {
    return levels.flatMap(level =>
      fs
        .readdirSync(`level-${level}`)
        .filter(name => !nameExceptions.includes(name))
        .map(fileName => {
          const [name, id, extension] = formatName(fileName).split('&');
          const code = splitCodeToSolutions(fs.readFileSync(`level-${level}/${fileName}`, 'utf-8'));
          return {
            id,
            name,
            fileName,
            level,
            code: code[0] + code[1],
            link: `https://school.programmers.co.kr/learn/courses/30/lessons/${id}`,
          };
        })
    );
  } catch (e) {
    return [];
  }
};

const rename = pages => {
  const formatName = name => {
    const nameExceptions = [
      [' ', '-'],
      ['?', '&#63;'],
    ];
    nameExceptions.forEach(([a, b]) => (name = name.replaceAll(a, b)));
    return name;
  };

  levels.forEach(level => {
    const files = fs.readdirSync(`level-${level}`);
    pages.forEach(({ title, link }) => {
      const id = link.split('/').at(-1);
      const inValidName = `${formatName(title)}.js`;

      if (!files.includes(inValidName)) return;

      const validName = `${formatName(title)}&${id}&.js`;

      if (!files.includes(validName))
        fs.renameSync(`level-${level}/${inValidName}`, `level-${level}/${validName}`, err => {
          console.log(err);
        });
    });
  });
};

const fetchPages = async () => {
  const $ = cheerio.load(await (await fetch(COURSE_URL)).text());
  const pages = [];
  $('.lesson-title').each((i, $node) => {
    const title = $($node).children('span').text().trim();
    const link = $($node).attr('href');
    pages.push({ title, link });
  });

  return pages;
};

const createREADME = api => {
  const solutions = api.reduce((acc, curr) => {
    const { level, name, link, fileName } = curr;
    const fileLink = `https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-${level}/${fileName}`;
    return { ...acc, [level]: acc[level] ? [...acc[level], { name, link, fileLink }] : [{ name, link, fileLink }] };
  }, {});
  const createTable = solutionArr =>
    solutionArr
      .map(({ name, link, fileLink }, i) => `| ${i + 1} | [${name}](${link}) | [${name}.js](${fileLink}) |`)
      .join('\n');

  const readme = `
# 프로그래머스 모든 문제 풀이
[![방문자수](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/codeisneverodd/programmers-coding-test&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=방문자수(Today/Total)&edge_flat=true)](https://github.com/codeisneverodd)
## 👋 소개
- 🌱 모든 문제는 JavaScript로 풀이되고 다양한 사람의 풀이가 올라와있어요
- ✅ 프로그래머스는 정답을 통과시키면 다른 사람들의 풀이를 볼 수 있어요! [익스텐션](https://chrome.google.com/webstore/detail/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A0%95%EB%8B%B5-%ED%86%B5%EA%B3%BC%EA%B8%B0/pogpgnlafgchgebcnohihjjmdjcffenl?hl=ko)을 이용해보세요!
- 🔎 [검색 사이트](https://programmers-solution-bank.netlify.app/) 혹은 본 README에서 검색을 통해 다양한 풀이도 볼 수 있어요!
- ⭐ **도움이 되셨다면** 오른쪽 상단 ↗ 의 ⭐️ **Star를 클릭**해 이 프로젝트를 응원해주세요!

## 👻 [크롬익스텐션](https://chrome.google.com/webstore/detail/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A0%95%EB%8B%B5-%ED%86%B5%EA%B3%BC%EA%B8%B0/pogpgnlafgchgebcnohihjjmdjcffenl?hl=ko) 이 출시되었습니다 🎉🎉
- 😆 무료 다운로드 👉 [프로그래머스 정답 통과기 - 크롬 웹 스토어](https://chrome.google.com/webstore/detail/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A0%95%EB%8B%B5-%ED%86%B5%EA%B3%BC%EA%B8%B0/pogpgnlafgchgebcnohihjjmdjcffenl?hl=ko)

[![extensionIntro](https://user-images.githubusercontent.com/54318460/187886360-dd8f917e-4ffe-4c6f-9b3c-d10a69b5f46e.gif)](https://chrome.google.com/webstore/detail/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A0%95%EB%8B%B5-%ED%86%B5%EA%B3%BC%EA%B8%B0/pogpgnlafgchgebcnohihjjmdjcffenl?hl=ko)


## 📢 공지
- 🔥 본 레퍼지토리에 본인의 해설을 PR을 통해 기여하면, 코드리뷰를 받아보실 수 있습니다. (기한: 2022/10/31)
- 기여 방법은 README 최하단을 참고해주세요.

## 🤔 다른 사람의 풀이가 왜 중요한가요?
- 코딩테스트 공부에 왕도는 없으며, 다양한 사람들의 풀이를 보며 많은 문제를 푸는 것이 최상의 방법입니다.
- [크롬익스텐션](https://chrome.google.com/webstore/detail/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A0%95%EB%8B%B5-%ED%86%B5%EA%B3%BC%EA%B8%B0/pogpgnlafgchgebcnohihjjmdjcffenl?hl=ko) 을 통해 다른 사람들의 풀이를 확인하고 자신의 풀이를 발전시켜보세요!


## 🌟 Contributors
[![contributors](https://contrib.rocks/image?repo=codeisneverodd/programmers-coding-test)](https://github.com/codeisneverodd/programmers-coding-test/graphs/contributors)

## 💡 Solutions

${Object.entries(solutions)
  .map(
    ([level, arr]) =>
      `
### 🌱 Level ${level} 

- 풀이 문제 수: ${arr.length}문제

| 번호 | 문제 출처 | 풀이 |
| --- | ------- | --- |
${createTable(arr)}

`
  )
  .join('')}


## 🙏🏻 아직 풀리지 않은 문제의 해답을 추가해 주세요!
### 커밋 컨벤션

| 접두어   | 작업 내용                           |
| -------- | ----------------------------------- |
| feat     | 풀이 추가 등 코드 수정                   |
| fix      | 모든 종류의 오류 수정                    |
| docs     | 문서 수정(코드 수정 없음)                 |
| etc      | 위의 경우들에 해당 하지 경우         |

### 🌱 기여 방법

1. Fork 한 후 본인의 해설을 추가합니다.
2. 본인의 저장소에서 이곳으로 PR을 한다.

### 🔥 필수 확인 사항
1. 파일 이름은 공백이 없어야하며, 공백은 - 로 채웁니다. 문제풀이 창에서 문제 이름을 복사하여 사용하는 것을 권장합니다.

- 예시) 가장 먼 노드 => 가장-먼-노드.js // [1차] 뉴스 클러스터링 => [1차]-뉴스-클러스터링

2. 새로운 파일을 추가할 시, 00-해답-예시.js 파일을 복제해서 사용할 것을 권장합니다. 

3. 기존 파일에 풀이를 추가할 시, 다른 사람과의 주석 컨벤션을 맞춥니다. 

## 👉 저작권

해당 Repository의 해답을 자신의 저작물에 추가할 수 있지만 **반드시** 본 Repository의
주소 \`https://github.com/codeisneverodd/programmers-coding-test\`
를 명시하여야합니다.
`;

  return readme.trim();
};

const build = async () => {
  const oldAPI = JSON.parse(fs.readFileSync('api.json'));
  const newAPI = createAPI();

  if (oldAPI.length === newAPI.length) return;

  rename(await fetchPages());
  fs.writeFileSync('./api.json', JSON.stringify(newAPI), 'utf-8');
  fs.writeFileSync('./README.md', createREADME(newAPI), 'utf-8');
};

build();
