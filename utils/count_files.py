from collections import Counter
from datetime import datetime
import os


def count_files():
    files_info = []
    total_file_count = 0
    directory_list = [directory for directory in os.listdir("./") if "level" in directory]
    directory_list.sort()
    for directory in directory_list:
        file_list = os.listdir(f"./{directory}")
        file_count = len(file_list) - 1
        temp = [directory, file_count]
        files_info.append(temp)
        total_file_count += file_count
    return files_info, total_file_count


def make_read_me(files_info, total_file_count):
    return f"""# 프로그래머스 모든 문제 풀이

🌱 프로그래머스의 [코딩테스트 문제](https://programmers.co.kr/learn/challenges?tab=all_challenges)의 문제 풀이를 찾으실 수 있습니다.

🌱 모든 문제는 JavaScript로 풀이되며, 원하는 풀이는 아래에서 검색을 통해 찾으실 수 있습니다 

[![thumbnail-coding-test-no-id](https://user-images.githubusercontent.com/54318460/158711288-5fbd903f-d3b6-4d56-bd1f-9e5946d67d0a.png)
](https://github.com/codeisneverodd/programmers-coding-test/)


## 😁 **도움이 되셨다면** 오른쪽 상단 ↗ 의 ⭐️ **Star를 클릭**해 이 프로젝트를 응원해주세요!

## Control + F 혹은 Cmd + F 를 통해 원하는 문제의 풀이를 찾아보세요!

### Level 1 ✅

- 전체 문제 수: 55문제
- 풀이 문제 수: {files_info[0][1]}문제
- 풀이 완료 시점: 2022년 1월

|      | 문제 출처                                                    | 풀이                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | [2016년](https://programmers.co.kr/learn/courses/30/lessons/12901) | [2016년.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/2016년.js) |
| 2    | [3진법 뒤집기](https://programmers.co.kr/learn/courses/30/lessons/68935) | [3진법-뒤집기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/3진법-뒤집기.js) |
| 3    | [K번째수](https://programmers.co.kr/learn/courses/30/lessons/42748) | [K번째수.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/K번째수.js) |
| 4    | [[1차] 다트 게임](https://programmers.co.kr/learn/courses/30/lessons/17682) | [[1차]-다트-게임.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/[1차]-다트-게임.js) |
| 5    | [[1차] 비밀지도](https://programmers.co.kr/learn/courses/30/lessons/17681) | [[1차]-비밀지도.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/[1차]-비밀지도.js) |
| 6    | [x만큼 간격이 있는 n개의 숫자](https://programmers.co.kr/learn/courses/30/lessons/12954) | [x만큼-간격이-있는-n개의-숫자.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/x만큼-간격이-있는-n개의-숫자.js) |
| 7    | [가운데 글자 가져오기](https://programmers.co.kr/learn/courses/30/lessons/12903) | [가운데-글자-가져오기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/가운데-글자-가져오기.js) |
| 8    | [같은 숫자는 싫어](https://programmers.co.kr/learn/courses/30/lessons/12906) | [같은-숫자는-싫어.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/같은-숫자는-싫어.js) |
| 9    | [나누어 떨어지는 숫자 배열](https://programmers.co.kr/learn/courses/30/lessons/12910) | [나누어-떨어지는-숫자-배열.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/나누어-떨어지는-숫자-배열.js) |
| 10   | [나머지가 1이 되는 수 찾기](https://programmers.co.kr/learn/courses/30/lessons/87389) | [나머지가-1이-되는-수-찾기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/나머지가-1이-되는-수-찾기.js) |
| 11   | [내적](https://programmers.co.kr/learn/courses/30/lessons/70128) | [내적.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/내적.js) |
| 12   | [두 개 뽑아서 더하기](https://programmers.co.kr/learn/courses/30/lessons/68644) | [두-개-뽑아서-더하기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/두-개-뽑아서-더하기.js) |
| 13   | [두 정수 사이의 합](https://programmers.co.kr/learn/courses/30/lessons/12912) | [두-정수-사이의-합.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/두-정수-사이의-합.js) |
| 14   | [로또의 최고 순위와 최저 순위](https://programmers.co.kr/learn/courses/30/lessons/77484) | [로또의-최고-순위와-최저-순위.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/로또의-최고-순위와-최저-순위.js) |
| 15   | [모의고사](https://programmers.co.kr/learn/courses/30/lessons/42840) | [모의고사.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/모의고사.js) |
| 16   | [문자열 내 p와 y의 개수](https://programmers.co.kr/learn/courses/30/lessons/12916) | [문자열-내-p와-y의-개수.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/문자열-내-p와-y의-개수.js) |
| 17   | [문자열 내 마음대로 정렬하기](https://programmers.co.kr/learn/courses/30/lessons/12915) | [문자열-내-마음대로-정렬하기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/문자열-내-마음대로-정렬하기.js) |
| 18   | [문자열 내림차순으로 배치하기](https://programmers.co.kr/learn/courses/30/lessons/12917) | [문자열-내림차순으로-배치하기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/문자열-내림차순으로-배치하기.js) |
| 19   | [문자열 다루기 기본](https://programmers.co.kr/learn/courses/30/lessons/12918) | [문자열-다루기-기본.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/문자열-다루기-기본.js) |
| 20   | [문자열을 정수로 바꾸기](https://programmers.co.kr/learn/courses/30/lessons/12925) | [문자열을-정수로-바꾸기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/문자열을-정수로-바꾸기.js) |
| 21   | [부족한 금액 계산하기](https://programmers.co.kr/learn/courses/30/lessons/82612) | [부족한-금액-계산하기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/부족한-금액-계산하기.js) |
| 22   | [서울에서 김서방 찾기](https://programmers.co.kr/learn/courses/30/lessons/12919) | [서울에서-김서방-찾기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/서울에서-김서방-찾기.js) |
| 23   | [소수 만들기](https://programmers.co.kr/learn/courses/30/lessons/12977) | [소수-만들기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/소수-만들기.js) |
| 24   | [소수 찾기](https://programmers.co.kr/learn/courses/30/lessons/12921) | [소수-찾기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/소수-찾기.js) |
| 25   | [수박수박수박수박수박수?](https://programmers.co.kr/learn/courses/30/lessons/12922) | [수박수박수박수박수박수.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/수박수박수박수박수박수.js) |
| 26   | [숫자 문자열과 영단어](https://programmers.co.kr/learn/courses/30/lessons/81301) | [숫자-문자열과-영단어.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/숫자-문자열과-영단어.js) |
| 27   | [시저 암호](https://programmers.co.kr/learn/courses/30/lessons/12926) | [시저-암호.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/시저-암호.js) |
| 28   | [신고 결과 받기](https://programmers.co.kr/learn/courses/30/lessons/92334) | [신고-결과-받기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/신고-결과-받기.js) |
| 29   | [신규 아이디 추천](https://programmers.co.kr/learn/courses/30/lessons/72410) | [신규-아이디-추천.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/신규-아이디-추천.js) |
| 30   | [실패율](https://programmers.co.kr/learn/courses/30/lessons/42889) | [실패율.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/실패율.js) |
| 31   | [약수의 개수와 덧셈](https://programmers.co.kr/learn/courses/30/lessons/77884) | [약수의-개수와-덧셈.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/약수의-개수와-덧셈.js) |
| 32   | [약수의 합](https://programmers.co.kr/learn/courses/30/lessons/12928) | [약수의-합.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/약수의-합.js) |
| 33   | [없는 숫자 더하기](https://programmers.co.kr/learn/courses/30/lessons/86051) | [없는-숫자-더하기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/없는-숫자-더하기.js) |
| 34   | [예산](https://programmers.co.kr/learn/courses/30/lessons/12982) | [예산.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/예산.js) |
| 35   | [완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576) | [완주하지-못한-선수.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/완주하지-못한-선수.js) |
| 36   | [음양 더하기](https://programmers.co.kr/learn/courses/30/lessons/76501) | [음양-더하기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/음양-더하기.js) |
| 37   | [이상한 문자 만들기](https://programmers.co.kr/learn/courses/30/lessons/12930) | [이상한-문자-만들기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/이상한-문자-만들기.js) |
| 38   | [자릿수 더하기](https://programmers.co.kr/learn/courses/30/lessons/12931) | [자릿수-더하기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/자릿수-더하기.js) |
| 39   | [자연수 뒤집어 배열로 만들기](https://programmers.co.kr/learn/courses/30/lessons/12932) | [자연수-뒤집어-배열로-만들기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/자연수-뒤집어-배열로-만들기.js) |
| 40   | [정수 내림차순으로 배치하기](https://programmers.co.kr/learn/courses/30/lessons/12933) | [정수-내림차순으로-배치하기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/정수-내림차순으로-배치하기.js) |
| 41   | [정수 제곱근 판별](https://programmers.co.kr/learn/courses/30/lessons/12934) | [정수-제곱근-판별.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/정수-제곱근-판별.js) |
| 42   | [제일 작은 수 제거하기연습문제](https://programmers.co.kr/learn/courses/30/lessons/12935) | [제일-작은-수-제거하기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/제일-작은-수-제거하기.js) |
| 43   | [직사각형 별찍기](https://programmers.co.kr/learn/courses/30/lessons/12969) | [직사각형-별찍기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/직사각형-별찍기.js) |
| 44   | [짝수와 홀수](https://programmers.co.kr/learn/courses/30/lessons/12937) | [짝수와-홀수.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/짝수와-홀수.js) |
| 45   | [체육복](https://programmers.co.kr/learn/courses/30/lessons/42862) | [체육복.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/체육복.js) |
| 46   | [최대공약수와 최소공배수](https://programmers.co.kr/learn/courses/30/lessons/12940) | [최대공약수와-최소공배수.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/최대공약수와-최소공배수.js) |
| 47   | [최소직사각형](https://programmers.co.kr/learn/courses/30/lessons/86491) | [최소직사각형.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/최소직사각형.js) |
| 48   | [콜라츠 추측](https://programmers.co.kr/learn/courses/30/lessons/12943) | [콜라츠-추측.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/콜라츠-추측.js) |
| 49   | [크레인 인형뽑기 게임](https://programmers.co.kr/learn/courses/30/lessons/64061) | [크레인-인형뽑기-게임.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/크레인-인형뽑기-게임.js) |
| 50   | [키패드 누르기](https://programmers.co.kr/learn/courses/30/lessons/67256) | [키패드-누르기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/키패드-누르기.js) |
| 51   | [평균 구하기](https://programmers.co.kr/learn/courses/30/lessons/12944) | [평균-구하기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/평균-구하기.js) |
| 52   | [폰켓몬](https://programmers.co.kr/learn/courses/30/lessons/1845) | [폰켓몬.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/폰켓몬.js) |
| 53   | [핸드폰 번호 가리기](https://programmers.co.kr/learn/courses/30/lessons/12948) | [핸드폰-번호-가리기.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/핸드폰-번호-가리기.js) |
| 54   | [행렬의 덧셈](https://programmers.co.kr/learn/courses/30/lessons/12950) | [행렬의-덧셈.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/행렬의-덧셈.js) |
| 55   | [하샤드 수](https://programmers.co.kr/learn/courses/30/lessons/12947) | [히샤드-수.js](https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/히샤드-수.js) |

### Level 2 👨🏻‍💻(풀이 중..)

- 전체 문제 수: 64문제
- 풀이 문제 수: {files_info[1][1]}문제
- 풀이 완료 예상 시점: 2022년 4월 중

### Level 3 👨🏻‍💻(풀이 중..)

- 전체 문제 수: 52문제
- 풀이 문제 수: {files_info[2][1]}문제
- 풀이 완료 예상 시점: 2022년 8월 중

### Level 4

- 풀이 문제 수: {files_info[3][1]}문제
- 풀이 완료 예상 시점 : 예정 없음

### Level 5

- 풀이 문제 수: {files_info[4][1]}문제
- 풀이 완료 예상 시점: 예정 없음

## 🙏🏻 아직 풀리지 않은 문제의 해답을 추가해 주세요!

### 추가 방법

1. 우측 상단의 Fork를 눌러 본인의 GitHub로 이동합니다.
2. Fork한 Repository를 `git clone 자신이-Fork한-자신의-Repository-주소` 를 통해 다운받습니다.
3. 해답을 해당하는 Level의 폴더에 `00-해답-예시.js`에 따라 생성합니다. 이때, **반드시 공백은`-` 바꾸어** 파일 이름을 짓습니다.
4. 자신이 Fork한 자신의 Repository에 push를 한 후, GitHub에서 Create pull request를 통해 기여합니다.
5. 해설은 검수자들의 확인이 끝나는대로 본 Repository에 반영됩니다.

## 저작권

해당 Repository의 해답을 자신의 저작물에 추가할 수 있지만 **반드시** 본 Repository의
주소 `https://github.com/codeisneverodd/programmers-coding-test`
를 명시하여야합니다.

"""


def update_readme():
    files_info, total_file_count = count_files()
    readme = make_read_me(files_info, total_file_count)
    return readme


if __name__ == "__main__":
    readme = update_readme()
    with open("./README.md", 'w', encoding='utf-8') as f:
        f.write(readme)
