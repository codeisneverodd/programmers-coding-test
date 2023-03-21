# 프로그래머스 모든 문제 풀이

[![방문자수](<https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/codeisneverodd/programmers-coding-test&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=방문자수(Today/Total)&edge_flat=true>)](https://github.com/codeisneverodd)

## 🔎 [검색 사이트 바로가기](https://codeisneverodd.com/solution-pass)

> 검색 사이트의 코드는 [이 저장소](https://github.com/codeisneverodd/home)에 공개되어 있어요

## 👋 소개

- 🌱 다양한 사람의 프로그래머스의 코딩테스트 정답이 올라와있어요!
- ✅ 프로그래머스는 정답을 통과시키면 다른 사람들의 풀이를 볼 수 있어요!
- [🔎 검색 사이트](https://codeisneverodd.com/solution-pass) 를 통해 간편하게 검색하고 풀이를 올릴 수 있어요!
- ⭐ **도움이 되셨다면** 오른쪽 상단 ↗ 의 ⭐️ **Star를 클릭**해 이 프로젝트를 응원해주세요!

## 🤔 다른 사람의 풀이가 왜 중요한가요?

- 코딩테스트 공부에 왕도는 없으며, 다양한 사람들의 풀이를 보며 많은 문제를 푸는 것이 최고의 방법입니다.

## 🌟 Contributors

[![contributors](https://contrib.rocks/image?repo=codeisneverodd/programmers-coding-test)](https://github.com/codeisneverodd/programmers-coding-test/graphs/contributors)

## 💡 Solutions

- 문제 업로드 방식 개선과 정답 관리를 위해 **기존 README 방식에서 [🔎 검색 사이트](https://codeisneverodd.com/solution-pass)에서 검색하는 방식으로** 바뀌었어요!
- 문제 목록과 정답은 [이 파일들](https://github.com/codeisneverodd/programmers-coding-test/tree/main-v2/data)로 관리되고 있어요. GitHub API를 이용해서 해당 파일을 자유롭게 사용해도 좋아요! 단, 코드를 보여주는 경우 반드시 아래 저작권을 따라주세요.

## 👉 저작권

해당 Repository의 해답을 자신의 저작물에 추가할 수 있지만 **반드시** 본 Repository의
주소 `https://github.com/codeisneverodd/programmers-coding-test`
를 명시하여야합니다.

## 📃 Types and Example
저와 같이 우리 레포의 데이터를 활용하고 싶으신 분들을 위해 타입과 간단한 예제를 남겨놓을게요!

### Fetch 예제
axios나 tanstack query 등 라이브러리 사용에 익숙하지 않거나 TypeScript에 익숙하지 않은 분들을 위한 간단한 예제에요.
```js
const DATA_ENDPOINT =
  "https://raw.githubusercontent.com/codeisneverodd/programmers-coding-test/main-v2/data";

export const getProbs = async () => {
  const res = await fetch(`${DATA_ENDPOINT}/problems.json`);
  return res.json();
};

export const getSols = async () => {
  const res = await fetch(`${DATA_ENDPOINT}/solutions.json`);
  return res.json();
};

```


### TypeScript & Tanstack Query(React Query) 예제
우리 레포에서 오는 값을 사용할 수 있는 custom hook 인 `useRepo`를 만드는 예제에요.

```ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DATA_ENDPOINT =
  "https://raw.githubusercontent.com/codeisneverodd/programmers-coding-test/main-v2/data";

export default function useRepo() {
  const probsQuery = useQuery({
    queryKey: ["repo", "sols"],
    queryFn: async () => {
      const res = await axios.get<Sol[]>(`${DATA_ENDPOINT}/problems.json`);
      return res.data;
    }
  });
  const solsQuery = useQuery({
    queryKey: ["repo", "probs"],
    queryFn: async () => {
      const res = await axios.get<Prob[]>(`${DATA_ENDPOINT}/solutions.json`);
      return res.data;
    }
  });

  return { probsQuery, solsQuery };
}

export type Prob = {
  id: string;
  title: string;
  solvedCount: number;
};

export type Sol = {
  id: string;
  author: string;
  code: string;
  probId: string;
  createdAt: ReturnType<typeof Date.now>;
  lang: Lang;
};

export type Lang = "JavaScript" | "Python";

```
