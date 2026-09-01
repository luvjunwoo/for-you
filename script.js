/* =========================
   화면 전환 함수
========================= */

function showScreen(screenId) {

    const screens =
        document.querySelectorAll(".screen");


    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    document
        .getElementById(screenId)
        .classList.add("active");

}


/* =========================
   첫 번째 화면
   편지 봉투
========================= */

const envelope =
    document.getElementById("envelope");


envelope.addEventListener(
    "click",
    () => {

        const envelopeElement =
            document.querySelector(".envelope");


        /* 봉투 열기 */

        envelopeElement
            .classList
            .add("open");


        /* 애니메이션 후 이동 */

        setTimeout(() => {

            showScreen("screen2");

        }, 900);

    }
);


/* =========================
   첫 번째 하트
========================= */

const heart1 =
    document.getElementById("heart1");


heart1.addEventListener(
    "click",
    () => {

        showScreen("screen3");

    }
);


/* =========================
   응 버튼
========================= */

const yesButton =
    document.getElementById("yesButton");


yesButton.addEventListener(
    "click",
    () => {

        showScreen("screen4");

    }
);


/* =========================
   아니 버튼
========================= */

const noButton =
    document.getElementById("noButton");


let noButtonScale = 1;


/*
아니 버튼 이동 함수
*/

function moveNoButton() {


    /*
    버튼을 누를수록 작아짐
    */

    noButtonScale = Math.max(
        0.35,
        noButtonScale - 0.1
    );


    /*
    버튼 크기
    */

    const buttonWidth =
        noButton.offsetWidth;

    const buttonHeight =
        noButton.offsetHeight;


    /*
    화면 밖으로
    나가지 않게 계산
    */

    const maxX =
        window.innerWidth -
        buttonWidth -
        20;

    const maxY =
        window.innerHeight -
        buttonHeight -
        20;


    /*
    랜덤 위치
    */

    const randomX =
        Math.floor(
            Math.random() * maxX
        ) + 10;


    const randomY =
        Math.floor(
            Math.random() * maxY
        ) + 10;


    /*
    fixed로 변경해서
    화면 안에서 자유롭게 이동
    */

    noButton.style.position =
        "fixed";


    /*
    새로운 위치로 이동
    */

    noButton.style.left =
        randomX + "px";


    noButton.style.top =
        randomY + "px";


    /*
    크기 줄이기
    */

    noButton.style.transform =
        `scale(${noButtonScale})`;

}


/*
클릭하려고 하면 도망감

PC와 모바일 둘 다 대응
*/

noButton.addEventListener(
    "pointerdown",
    (event) => {

        event.preventDefault();

        moveNoButton();

    }
);


/*
마우스가 가까이 가도 도망감
*/

noButton.addEventListener(
    "mouseenter",
    () => {

        moveNoButton();

    }
);


/* =========================
   두 번째 하트
========================= */

const heart2 =
    document.getElementById("heart2");


heart2.addEventListener(
    "click",
    () => {

        showScreen("screen5");

    }
);
