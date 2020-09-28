## Yacht Dice Game
------------
### 프로젝트 계획이유
> 닌텐도 스위치 51 Worldwide Games라는 칩을 구매해서 배송을 기다리는 중에 너무 하고싶어서 유튜브에서 각종스트리머들이 하는것을보고 참고해서 비슷하게 만들었습니다.
> 로컬로 2인용게임이며 혼자서 1player, 2player 할수있습니다.
> 하는방법은 나무위키의 https://namu.wiki/w/%EC%9A%94%ED%8A%B8(%EA%B2%8C%EC%9E%84)?from=Yacht%20Dice 2.2항목에 설명이 되어있습니다.
------------
### 실행 설명

1. 로컬 파일로 실행방법

    + ```$ npm start or $ yarn start```
    
2. 도메인으로 실행방법

    + http://yacht.kro.kr/
    
------------
### 기능 설명

1. Aces
2. Deuces
3. Threes
4. Fours
5. Fives
6. Sixes
        + > 1 ~ 6 까지는 5개의 주사의의 각각의 수의 합계가 점수로 들어갑니다. subtotal 이란게 있는데 1 ~ 6 까지의 점수가 63이 넘을경우 35점을 더해줍니다.
