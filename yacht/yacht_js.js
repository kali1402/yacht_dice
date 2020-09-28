document.getElementById("imgbutton").addEventListener("click", (e) => {
    document.getElementById("img").style.display = "block";
    document.getElementById("imgclose").style.display = "block";
})

document.getElementById("imgclose").addEventListener("click", (e) => {
    document.getElementById("img").style.display = "none";
    document.getElementById("imgclose").style.display = "none";
})

function noEvent() { // 새로 고침 방지
    if (event.keyCode == 116) {
        event.keyCode = 2;
        return false;
    } else if (event.ctrlKey
        && (event.keyCode == 78 || event.keyCode == 82)) {
        event.keyCode = 2;
        return false;
    } else if (event.keyCode == 27) {
        event.keyCode = 2;
        return false;
    }
}
document.onkeydown = noEvent;

// 다이스 랜덤 배열변수
let arrDice = new Array();

// 족보 배열
let categories = ["aces", "deuces", "threes", "fours", "fives", "sixes", "choice", "4ofakind", "fullhouse", "sstraight", "lstraight", "yacht"];

// 기회
let num = 3;

// player 교체변수
let play = 1;

// 족보 비교변수
let choice;

// 턴
let turn = 1;

// 배열정렬시 필요한변수
let temp;

// 주사위
let Dice1 = 1;
let Dice2 = 1;
let Dice3 = 1;
let Dice4 = 1;
let Dice5 = 1;

// 상단 족보
let ace1 = 1;
let ace2 = 1;
let deuce1 = 1;
let deuce2 = 1;
let three1 = 1;
let three2 = 1;
let four1 = 1;
let four2 = 1;
let five1 = 1;
let five2 = 1;
let sixe1 = 1;
let sixe2 = 1;

// 하단 족보
let choice1 = 1;
let choice2 = 1;
let _4ofakind1 = 1;
let _4ofakind2 = 1;
let fullhouse1 = 1;
let fullhouse2 = 1;
let sstraight1 = 1;
let sstraight2 = 1;
let lstraight1 = 1;
let lstraight2 = 1;
let yacht1 = 1;
let yacht2 = 1;

document.getElementById("chance").value = num + "left";
document.getElementById("player" + play).style.color = "red";
document.getElementById("player" + play).style.fontWeight = "bold";
document.getElementById("player" + play + "total").style.backgroundColor = "rgba(255,253,96)";

function movein(char) {
    document.getElementById("player" + play + char).style.backgroundColor = "rgba(255, 114, 2)";
    document.getElementById("player" + play + char).style.cursor = "pointer";
}

function moveout(char) {
    document.getElementById("player" + play + char).style.backgroundColor = "rgba(255,253,96)";
}

function number(number) {
    num = number;
    document.getElementById("chance").value = num + "left";
    // 기회를 다썻을경우 dice 배열을 정렬 (오름차순) 및 정렬된 값을 표기
    if (num == 0) {
        document.getElementById("start").style.display = "none";
        for (let i = 0; i < arrDice.length; i++) {
            for (let j = 0; j < arrDice.length - i - 1; j++) {
                if (arrDice[j] > arrDice[j + 1]) {
                    temp = arrDice[j];
                    arrDice[j] = arrDice[j + 1];
                    arrDice[j + 1] = temp;
                }
            }
        }
        for (let i = 1; i < 6; i++) {
            //  s.straight 일경우 고정 15점 표기
            if (
                arrDice[1] == i && arrDice[2] == i + 1 && arrDice[3] == i + 2 && arrDice[4] == i + 3 ||
                arrDice[2] == i && arrDice[3] == i + 1 && arrDice[4] == i + 2 && arrDice[5] == i + 3
            ) {
                choice = "sstraight";
                document.getElementById("player" + play + choice).value = "15";
            }

            //  l.straight 일경우 고정 15점 표기
            if (
                arrDice[1] == i && arrDice[2] == i + 1 && arrDice[3] == i + 2 && arrDice[4] == i + 3 && arrDice[5] == i + 4
            ) {
                choice = "lstraight";
                document.getElementById("player" + play + choice).value = "30";
            }

            // fullhouse 일경우 5개의 총합 표기
            if (
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i && arrDice[4] == i + 1 && arrDice[5] == i + 1 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i && arrDice[4] == i + 2 && arrDice[5] == i + 2 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i && arrDice[4] == i + 3 && arrDice[5] == i + 3 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i && arrDice[4] == i + 4 && arrDice[5] == i + 4 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i && arrDice[4] == i + 5 && arrDice[5] == i + 5 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i + 1 && arrDice[4] == i + 1 && arrDice[5] == i + 1 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i + 2 && arrDice[4] == i + 2 && arrDice[5] == i + 2 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i + 3 && arrDice[4] == i + 3 && arrDice[5] == i + 3 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i + 4 && arrDice[4] == i + 4 && arrDice[5] == i + 4 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i + 5 && arrDice[4] == i + 5 && arrDice[5] == i + 5
            ) {
                choice = "fullhouse";
                for (let i = 1; i < 6; i++) {
                    document.getElementById("player" + play + choice).value = Number(document.getElementById("player" + play + choice).value) + Number(arrDice[i]);
                }
            }

            document.getElementById("result" + i).value = arrDice[i];
            document.getElementById("dice" + i).value = arrDice[i];
            document.getElementById("result" + i).style.display = "block";
            document.getElementById("dice" + i).style.display = "none";
        }
    }
}

function end(char) {
    // 킵한다이스 변수초기화
    Dice1 = 1;
    Dice2 = 1;
    Dice3 = 1;
    Dice4 = 1;
    Dice5 = 1;
    document.getElementById("start").style.display = "none";

    for (let i = 0; i < document.getElementsByClassName("dice").length; i++) {
        document.getElementsByClassName("setdice1")[i].style.padding = "30px";
        document.getElementsByClassName("setdice2")[i].style.padding = "30px";
    }

    // 상단 족보 end표시
    for (let i = 0; i < categories.length; i++) {
        if (char == categories[i]) {
            document.getElementById("player" + play + categories[i]).style.display = "none";
            document.getElementById("player" + play + categories[i] + "result").style.display = "block";
            document.getElementById("player" + play + categories[i] + "result").value = document.getElementById("player" + play + categories[i]).value;
        }
    }
    if (char == categories[0]) {
        if (play == 1) {
            ace1 -= 1;
        } else if (play == 2) {
            ace2 -= 1;
        }
    }

    if (char == categories[1]) {
        if (play == 1) {
            deuce1 -= 1;
        } else if (play == 2) {
            deuce2 -= 1;
        }
    }

    if (char == categories[2]) {
        if (play == 1) {
            three1 -= 1;
        } else if (play == 2) {
            three2 -= 1;
        }
    }

    if (char == categories[3]) {
        if (play == 1) {
            four1 -= 1;
        } else if (play == 2) {
            four2 -= 1;
        }
    }

    if (char == categories[4]) {
        if (play == 1) {
            five1 -= 1;
        } else if (play == 2) {
            five2 -= 1;
        }
    }

    if (char == categories[5]) {
        if (play == 1) {
            sixe1 -= 1;
        } else if (play == 2) {
            sixe2 -= 1;
        }
    }

    // 하단 족보 end표시
    if (char == categories[6]) {
        if (play == 1) {
            choice1 -= 1;
        } else if (play == 2) {
            choice2 -= 1;
        }
    }

    if (char == categories[7]) {
        if (play == 1) {
            _4ofakind1 -= 1;
        } else if (play == 2) {
            _4ofakind2 -= 1;
        }
    }

    if (char == categories[8]) {
        if (play == 1) {
            fullhouse1 -= 1;
        } else if (play == 2) {
            fullhouse2 -= 1;
        }
    }

    if (char == categories[9]) {
        if (play == 1) {
            sstraight1 -= 1;
        } else if (play == 2) {
            sstraight2 -= 1;
        }
    }

    if (char == categories[10]) {
        if (play == 1) {
            lstraight1 -= 1;
        } else if (play == 2) {
            lstraight2 -= 1;
        }
    }

    if (char == categories[11]) {
        if (play == 1) {
            yacht1 -= 1;
        } else if (play == 2) {
            yacht2 -= 1;
        }
    }

    // subtotal, total 점수 초기화
    document.getElementById("player" + play + "result").value = "";
    document.getElementById("player" + play + "total").value = "";

    // subtotal 상단 족보 점수체크
    for (let i = 0; i < 6; i++) {
        document.getElementById("player" + play + "result").value = Number(document.getElementById("player" + play + "result").value.split("/")[0]) + Number(document.getElementById("player" + play + categories[i] + "result").value) + "/63";
    }

    // total 상단 하단 족보 점수체크
    for (let i = 0; i < categories.length; i++) {
        document.getElementById("player" + play + "total").value = Number(document.getElementById("player" + play + "total").value) + Number(document.getElementById("player" + play + categories[i] + "result").value) + Number(document.getElementById("player" + play + "bonus").value);
    }

    if (Number(document.getElementById("player" + play + "result").value.split("/")[0]) >= 63) {
        document.getElementById("player" + play + "bonus").value = 35;
    }

    // player 색상 변경
    document.getElementById("player" + play).style.color = "black";
    document.getElementById("player" + play).style.fontWeight = "normal";
    for (let i = 0; i < categories.length; i++) {
        document.getElementById("player" + play + categories[i]).style.backgroundColor = "rgba(230, 228, 213)";
        document.getElementById("player" + play + categories[i] + "result").style.backgroundColor = "rgba(230, 228, 213)";
        document.getElementById("player" + play + categories[i] + "result").style.color = "red";
    }

    document.getElementsByClassName("totalbc" + play)[0].style.backgroundColor = "rgba(230, 228, 213)";

    // player 바꾸기
    if (play == 2) {
        play -= 1;
        // turn이 12일경우 게임끝
        if (turn == 12) {
            if (Number(document.getElementById("player1total").value) > Number(document.getElementById("player2total").value)) {
                alert("1player win!!");
            } else if (Number(document.getElementById("player1total").value) < Number(document.getElementById("player2total").value)) {
                alert("2player win!!");
            } else {
                alert("draw");
            }
            location.reload();
        } else {
            for (let i = 1; i < 6; i++) {
            }
            turn += 1;
            document.getElementById("turn").value = turn + "/12";
        }
    } else {
        play += 1;
    }

    // 현재 player에게 색상과진하기를 주기
    for (let i = 0; i < categories.length; i++) {
        document.getElementById("player" + play + categories[i]).value = 0;
    }
    for (let i = 0; i < categories.length; i++) {
        document.getElementById("player" + play + categories[i]).style.backgroundColor = "rgba(255, 253, 96)";
        document.getElementById("player" + play + categories[i] + "result").style.backgroundColor = "rgba(255, 253, 96)";
    }

    document.getElementsByClassName("totalbc" + play)[0].style.backgroundColor = "rgba(255, 253, 96)";
    document.getElementById("player" + play).style.color = "red";
    document.getElementById("player" + play).style.fontWeight = "bold";

    // 다른 player의 버튼을 안보이게 설정
    if (play == 1) {
        for (let i = 0; i < categories.length; i++) {
            document.getElementById("player" + (play + 1) + categories[i]).style.display = "none";
            document.getElementById("player" + play + categories[i]).style.display = "block";
        }
    } else if (play == 2) {
        for (let i = 0; i < categories.length; i++) {
            document.getElementById("player" + (play - 1) + categories[i]).style.display = "none";
            document.getElementById("player" + play + categories[i]).style.display = "block";
        }
    }

    // 상단 족보의 버튼을 없앰
    if (ace1 == 0) {
        document.getElementById("player1" + categories[0]).style.display = "none";
    }

    if (ace2 == 0) {
        document.getElementById("player2" + categories[0]).style.display = "none";
    }

    if (deuce1 == 0) {
        document.getElementById("player1" + categories[1]).style.display = "none";
    }

    if (deuce2 == 0) {
        document.getElementById("player2" + categories[1]).style.display = "none";
    }

    if (three1 == 0) {
        document.getElementById("player1" + categories[2]).style.display = "none";
    }

    if (three2 == 0) {
        document.getElementById("player2" + categories[2]).style.display = "none";
    }

    if (four1 == 0) {
        document.getElementById("player1" + categories[3]).style.display = "none";
    }

    if (four2 == 0) {
        document.getElementById("player2" + categories[3]).style.display = "none";
    }

    if (five1 == 0) {
        document.getElementById("player1" + categories[4]).style.display = "none";
    }

    if (five2 == 0) {
        document.getElementById("player2" + categories[4]).style.display = "none";
    }

    if (sixe1 == 0) {
        document.getElementById("player1" + categories[5]).style.display = "none";
    }

    if (sixe2 == 0) {
        document.getElementById("player2" + categories[5]).style.display = "none";
    }

    // 하단 족보의 버튼을 없앰
    if (choice1 == 0) {
        document.getElementById("player1" + categories[6]).style.display = "none";
    }

    if (choice2 == 0) {
        document.getElementById("player2" + categories[6]).style.display = "none";
    }

    if (_4ofakind1 == 0) {
        document.getElementById("player1" + categories[7]).style.display = "none";
    }

    if (_4ofakind2 == 0) {
        document.getElementById("player2" + categories[7]).style.display = "none";
    }

    if (fullhouse1 == 0) {
        document.getElementById("player1" + categories[8]).style.display = "none";
    }

    if (fullhouse2 == 0) {
        document.getElementById("player2" + categories[8]).style.display = "none";
    }

    if (sstraight1 == 0) {
        document.getElementById("player1" + categories[9]).style.display = "none";
    }

    if (sstraight2 == 0) {
        document.getElementById("player2" + categories[9]).style.display = "none";
    }

    if (lstraight1 == 0) {
        document.getElementById("player1" + categories[10]).style.display = "none";
    }

    if (lstraight2 == 0) {
        document.getElementById("player2" + categories[10]).style.display = "none";
    }

    if (yacht1 == 0) {
        document.getElementById("player1" + categories[11]).style.display = "none";
    }

    if (yacht2 == 0) {
        document.getElementById("player2" + categories[11]).style.display = "none";
    }
    // dice 값을 초기화 
    for (let i = 1; i < 6; i++) {
        document.getElementById("dice" + i).style.display = "none";
        document.getElementById("dice" + i).style.value = 0;
    }

    // 기회 3으로 바꾸기
    num = 3;
    document.getElementById("chance").value = num + "left";

    document.getElementById("start").style.display = "block";

    // 다이스 버튼을 없애기
    for (let i = 1; i < 6; i++) {
        document.getElementById("result" + i).style.display = "none";
        document.getElementById("dice" + i).style.display = "none";
    }
}

function start() {
    for (let i = 0; i < document.getElementsByClassName("dice").length; i++) {
        document.getElementsByClassName("setdice1")[i].style.padding = "0px";
        document.getElementsByClassName("setdice2")[i].style.padding = "0px";
    }

    // 플레이어 버튼 체인지 부분
    if (play == 1) {
        for (let i = 0; i < categories.length; i++) {
            document.getElementById("player" + (play + 1) + categories[i]).style.display = "none";
        }
    } else if (play == 2) {
        for (let i = 0; i < categories.length; i++) {
            document.getElementById("player" + (play - 1) + categories[i]).style.display = "none";
        }
    }

    // 모든 족보의 버튼을 0으로 초기화
    for (let i = 0; i < categories.length; i++) {
        document.getElementById("player" + play + categories[i]).value = "0";
        document.getElementById("player" + play + categories[i]).style.backgroundColor = "rgba(255,253,96)";
        document.getElementById("player" + play + categories[i]).style.border = "none";
    }

    // 첫시작일때 dice의 버튼을 보이게 설정
    if (num == 3) {
        for (let i = 1; i < 6; i++) {
            document.getElementById("dice" + i).style.display = "block";
        }
        document.getElementById("confirmation").style.display = "block";
    }

    // dice의 값을 1~6 랜덤으로 설정
    for (let i = 1; i < 6; i++) {
        arrDice[i] = Math.round(Math.random() * 5 + 1);
        document.getElementById("dice" + i).value = arrDice[i];
    }

    // 1~5의 dice의값을 보존
    if (Dice1 == 0) {
        document.getElementById("dice1").value = document.getElementById("result1").value;
        arrDice[1] = document.getElementById("dice1").value;
    }

    if (Dice2 == 0) {
        document.getElementById("dice2").value = document.getElementById("result2").value;
        arrDice[2] = document.getElementById("dice2").value;
    }

    if (Dice3 == 0) {
        document.getElementById("dice3").value = document.getElementById("result3").value;
        arrDice[3] = document.getElementById("dice3").value;
    }

    if (Dice4 == 0) {
        document.getElementById("dice4").value = document.getElementById("result4").value;
        arrDice[4] = document.getElementById("dice4").value;
    }

    if (Dice5 == 0) {
        document.getElementById("dice5").value = document.getElementById("result5").value;
        arrDice[5] = document.getElementById("dice5").value;
    }

    for (let i = 1; i < 6; i++) {
        if (arrDice[i] == 1) {
            choice = "aces";
        }

        if (arrDice[i] == 2) {
            choice = "deuces";
        }

        if (arrDice[i] == 3) {
            choice = "threes";
        }

        if (arrDice[i] == 4) {
            choice = "fours";
        }

        if (arrDice[i] == 5) {
            choice = "fives";
        }

        if (arrDice[i] == 6) {
            choice = "sixes";
        }

        // 1~6족보에 값을 부여하기
        document.getElementById("player" + play + choice).value = Number(document.getElementById("player" + play + choice).value) + Number(arrDice[i]);

        // yacht일경우 고정 50점표기
        if (arrDice[1] == i && arrDice[2] == i && arrDice[3] == i && arrDice[4] == i && arrDice[5] == i) {
            choice = "yacht";
            document.getElementById("player" + play + choice).value = "50";
        }

        // 4 of a kind 일경우 5개의 합 표기
        if (
            arrDice[1] == i && arrDice[2] == i && arrDice[3] == i && arrDice[4] == i ||
            arrDice[1] == i && arrDice[2] == i && arrDice[3] == i && arrDice[5] == i ||
            arrDice[1] == i && arrDice[2] == i && arrDice[4] == i && arrDice[5] == i ||
            arrDice[1] == i && arrDice[3] == i && arrDice[4] == i && arrDice[5] == i ||
            arrDice[2] == i && arrDice[3] == i && arrDice[4] == i && arrDice[5] == i
        ) {
            choice = "4ofakind";
            for (let i = 1; i < 6; i++) {
                document.getElementById("player" + play + choice).value = Number(document.getElementById("player" + play + choice).value) + Number(arrDice[i]);
            }
        }

        // choice 5개의 합 표기
        document.getElementById("player" + play + "choice").value = Number(document.getElementById("player" + play + "choice").value) + Number(arrDice[i]);
    }

    // 굴릴때마다 기회 1빼기 
    num -= 1;
    document.getElementById("chance").value = num + "left";

    // 기회를 다썻을경우 dice 배열을 정렬 (오름차순) 및 정렬된 값을 표기
    if (num == 0) {
        document.getElementById("start").style.display = "none";
        for (let i = 0; i < arrDice.length; i++) {
            for (let j = 0; j < arrDice.length - i - 1; j++) {
                if (arrDice[j] > arrDice[j + 1]) {
                    temp = arrDice[j];
                    arrDice[j] = arrDice[j + 1];
                    arrDice[j + 1] = temp;
                }
            }
        }
        for (let i = 1; i < 6; i++) {
            //  s.straight 일경우 고정 15점 표기
            if (
                arrDice[1] == i && arrDice[2] == i + 1 && arrDice[3] == i + 2 && arrDice[4] == i + 3 ||
                arrDice[2] == i && arrDice[3] == i + 1 && arrDice[4] == i + 2 && arrDice[5] == i + 3 ||
                arrDice[1] == i && arrDice[2] == i + 1 && arrDice[3] == i + 2 && arrDice[5] == i + 3 ||
                arrDice[1] == i && arrDice[2] == i + 1 && arrDice[4] == i + 2 && arrDice[5] == i + 3 ||
                arrDice[1] == i && arrDice[3] == i + 1 && arrDice[4] == i + 2 && arrDice[5] == i + 3
            ) {
                choice = "sstraight";
                document.getElementById("player" + play + choice).value = "15";
            }

            //  l.straight 일경우 고정 30점 표기
            if (
                arrDice[1] == i && arrDice[2] == i + 1 && arrDice[3] == i + 2 && arrDice[4] == i + 3 && arrDice[5] == i + 4
            ) {
                choice = "lstraight";
                document.getElementById("player" + play + choice).value = "30";
            }

            // fullhouse 일경우 5개의 총합 표기
            if (
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i && arrDice[4] == i + 1 && arrDice[5] == i + 1 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i && arrDice[4] == i + 2 && arrDice[5] == i + 2 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i && arrDice[4] == i + 3 && arrDice[5] == i + 3 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i && arrDice[4] == i + 4 && arrDice[5] == i + 4 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i && arrDice[4] == i + 5 && arrDice[5] == i + 5 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i + 1 && arrDice[4] == i + 1 && arrDice[5] == i + 1 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i + 2 && arrDice[4] == i + 2 && arrDice[5] == i + 2 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i + 3 && arrDice[4] == i + 3 && arrDice[5] == i + 3 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i + 4 && arrDice[4] == i + 4 && arrDice[5] == i + 4 ||
                arrDice[1] == i && arrDice[2] == i && arrDice[3] == i + 5 && arrDice[4] == i + 5 && arrDice[5] == i + 5
            ) {
                choice = "fullhouse";
                for (let i = 1; i < 6; i++) {
                    document.getElementById("player" + play + choice).value = Number(document.getElementById("player" + play + choice).value) + Number(arrDice[i]);
                }
            }

            document.getElementById("result" + i).value = arrDice[i];
            document.getElementById("dice" + i).value = arrDice[i];
            document.getElementById("result" + i).style.display = "block";
            document.getElementById("dice" + i).style.display = "none";
        }
    }
}

// 다이스를 keep 했을때
function dice(num) {
    document.getElementById("result" + num).value = document.getElementById("dice" + num).value;
    document.getElementById("result" + num).style.display = "block";
    document.getElementById("dice" + num).style.display = "none";

    if (num == 1) {
        Dice1 -= 1;
    }

    if (num == 2) {
        Dice2 -= 1;
    }

    if (num == 3) {
        Dice3 -= 1;
    }

    if (num == 4) {
        Dice4 -= 1;
    }

    if (num == 5) {
        Dice5 -= 1;
    }
}

// keep한 다이스를 다시 가져올때
function backdice(num) {
    document.getElementById("result" + num).value = "";
    document.getElementById("result" + num).style.display = "none";
    document.getElementById("dice" + num).style.display = "block";

    if (num == 1) {
        Dice1 += 1;
    }

    if (num == 2) {
        Dice2 += 1;
    }

    if (num == 3) {
        Dice3 += 1;
    }

    if (num == 4) {
        Dice4 += 1;
    }

    if (num == 5) {
        Dice5 += 1;
    }
}