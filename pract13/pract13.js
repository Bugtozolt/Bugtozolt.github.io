// warrior hp and mp get!!!!!!
const warhp = document.querySelector(".hpbox3");
const minushpbtn = document.querySelector(".mw");
const addhpbtn = document.querySelector(".aw");
const numofhppotw = document.querySelector("#numhppotw");
const numofmppotw = document.querySelector("#nummppotw");
let wartotalhp = 500;
warhp.innerHTML = wartotalhp;
let whppotionmax = 2;
let wmppotionmax = 2;

const warhppotion = document.querySelector(".potionhp");
const warmppotion = document.querySelector(".potionmp");

numofhppotw.innerHTML = "HP potion:" + whppotionmax;
warhppotion.addEventListener("click", function () {
    if (whppotionmax != 0) {
        wartotalhp = wartotalhp + 100;
        warhp.innerHTML = wartotalhp;
        whppotionmax -= 1;
    }
    numofhppotw.innerHTML = "HP potion:" + whppotionmax;
    const potionsound = new Audio("potion_sound.mp3");
    potionsound.play();
});

numofmppotw.innerHTML = "MP potion:" + wmppotionmax;
warmppotion.addEventListener("click", function () {
    if (wmppotionmax != 0) {
        wartotalmp = wartotalmp + 100;
        warmp.innerHTML = wartotalmp;
        wmppotionmax -= 1;
    }
    numofmppotw.innerHTML = "MP potion:" + wmppotionmax;
    const potionsound = new Audio("potion_sound.mp3");
    potionsound.play();
});

let warResetTimeout = null; // store timeout ID
const warpic = document.querySelector("#warpic");
minushpbtn.addEventListener("click", function () {
    if (wartotalhp > 0) {
        wartotalhp -= 10;
        warhp.innerHTML = wartotalhp;

        // Immediately play mage dying animation
        warpic.src = "images/oof_warrior.gif";

        // Play sound immediately
        const oof = new Audio("oof_sound.mp3");
        oof.play();

        // Clear any previous timeout so it doesn't stack
        if (warResetTimeout !== null) {
            clearTimeout(warResetTimeout);
        }

        // Start a new timeout to switch back to mage gif after 2 seconds
        warResetTimeout = setTimeout(function () {
            warpic.src = "images/warrior_gif.gif";
            warResetTimeout = null; // reset
        }, 2000);
    }
});

addhpbtn.addEventListener("click", function () {
    wartotalhp = wartotalhp + 10;
    warhp.innerHTML = wartotalhp;
});

const warmp = document.querySelector(".mpbox3");
const minusmpbtn = document.querySelector(".mm");
const addmpbtn = document.querySelector(".am");
let wartotalmp = 300;
warmp.innerHTML = wartotalmp;

minusmpbtn.addEventListener("click", function () {
    if (wartotalmp > 0) {
        wartotalmp = wartotalmp - 10;
        warmp.innerHTML = wartotalmp;
    }
    const losemp = new Audio("loss_mp.mp3");
    losemp.play();
});

addmpbtn.addEventListener("click", function () {
    wartotalmp = wartotalmp + 10;
    warmp.innerHTML = wartotalmp;
});

//mage hp and mp get!!!

const magehp = document.querySelector(".hpbox1");
const minushpbtnm = document.querySelector(".hpm");
const addhpbtnm = document.querySelector(".addm");
let magetotalhp = 400;
magehp.innerHTML = magetotalhp;

let whppotionmax2 = 2;
let wmppotionmax2 = 2;
const numofhppotw2 = document.querySelector("#numhppotw2");
const numofmppotw2 = document.querySelector("#nummppotw2");
const magehppotion = document.querySelector(".potionhp2");
const magemppotion = document.querySelector(".potionmp2");
const magepic = document.querySelector("#magpic");


numofhppotw2.innerHTML = "HP potion:" + whppotionmax2;
magehppotion.addEventListener("click", function () {
    if (whppotionmax2 != 0) {
        magetotalhp = magetotalhp + 100;
        magehp.innerHTML = magetotalhp;
        whppotionmax2 -= 1;
    }
    numofhppotw2.innerHTML = "HP potion:" + whppotionmax2;
    const potionsound = new Audio("potion_sound.mp3");
    potionsound.play();
});

numofmppotw2.innerHTML = "MP potion:" + wmppotionmax2;
magemppotion.addEventListener("click", function () {
    if (wmppotionmax2 != 0) {
        magetotalmp = magetotalmp + 100;
        magemp.innerHTML = magetotalmp;
        wmppotionmax2 -= 1;
    }
    numofmppotw2.innerHTML = "MP potion:" + wmppotionmax2;
    const potionsound = new Audio("potion_sound.mp3");
    potionsound.play();
});

function magedying() {
    if (magetotalhp < 100) {
        magepic.src = "images/warrior_gif.gif";
    }
}

function magedying() {
    magepic.src = "images/oof_mage.gif";
}

let mageResetTimeout = null; // store timeout ID

minushpbtnm.addEventListener("click", function () {
    if (magetotalhp > 0) {
        magetotalhp -= 10;
        magehp.innerHTML = magetotalhp;

        // Immediately play mage dying animation
        magepic.src = "images/oof_mage.gif";

        // Play sound immediately
        const oof = new Audio("oof_sound.mp3");
        oof.play();

        // Clear any previous timeout so it doesn't stack
        if (mageResetTimeout !== null) {
            clearTimeout(mageResetTimeout);
        }

        // Start a new timeout to switch back to mage gif after 2 seconds
        mageResetTimeout = setTimeout(function () {
            magepic.src = "images/mage_gif.gif";
            mageResetTimeout = null; // reset
        }, 2000);
    }
});


addhpbtnm.addEventListener("click", function () {
    magetotalhp = magetotalhp + 10;
    magehp.innerHTML = magetotalhp;
});

const magemp = document.querySelector(".mpbox1");
const minusmpbtnm = document.querySelector(".mmm");
const addmpbtnm = document.querySelector(".amm");
let magetotalmp = 500;
magemp.innerHTML = magetotalmp;

minusmpbtnm.addEventListener("click", function () {
    if (magetotalmp > 0) {
        magetotalmp = magetotalmp - 10;
        magemp.innerHTML = magetotalmp;
    }
    const losemp = new Audio("loss_mp.mp3");
    losemp.play();
});

addmpbtnm.addEventListener("click", function () {
    magetotalmp = magetotalmp + 10;
    magemp.innerHTML = magetotalmp;
});

//monster hp

const monhp = document.querySelector(".hpbox2");
const minushpbtnmon = document.querySelector(".monmin");
const addhpbtnmon = document.querySelector(".monadd");
const minushundred = document.querySelector(".minushundred");
const addhundred = document.querySelector(".addhundred");
const minushpbtnmon2 = document.querySelector(".monmin2");
const addhpbtnmon2 = document.querySelector(".monadd2");
const minushundred2 = document.querySelector(".minushundred2");
const addhundred2 = document.querySelector(".addhundred2");
const winsound = new Audio("win_sound.mp3");

let montotalhp = 0;
monhp.innerHTML = montotalhp;

minushpbtnmon.addEventListener("click", function () {
    if (montotalhp > 0) {
        montotalhp = montotalhp - 10;
        monhp.innerHTML = montotalhp;
    }
    const oof = new Audio("oof_sound.mp3");
    oof.play();
    if (montotalhp == 0 || montotalhp < 0) {
        winsound.play();
    }
});

minushundred.addEventListener("click", function () {
    if (montotalhp > 0) {
        montotalhp = montotalhp - 100;
        if (montotalhp < 0) {
            montotalhp = 0;
        }
        monhp.innerHTML = montotalhp;
        const bigattacksound = new Audio("big_attack.mp3");
        bigattacksound.play();
    }
    if (montotalhp == 0 || montotalhp < 0) {
        winsound.play();
    }
});

addhpbtnmon.addEventListener("click", function () {
    montotalhp = montotalhp + 10;
    monhp.innerHTML = montotalhp;
});

addhundred.addEventListener("click", function () {
    montotalhp = montotalhp + 100;
    monhp.innerHTML = montotalhp;
});

//for flipped player

minushpbtnmon2.addEventListener("click", function () {
    if (montotalhp > 0) {
        montotalhp = montotalhp - 10;
        monhp.innerHTML = montotalhp;
    }
    const oof = new Audio("oof_sound.mp3");
    oof.play();
    if (montotalhp == 0 || montotalhp < 0) {
        winsound.play();
    }
});

minushundred2.addEventListener("click", function () {
    if (montotalhp > 0) {
        montotalhp = montotalhp - 100;
        if (montotalhp < 0) {
            montotalhp = 0;
        }
        monhp.innerHTML = montotalhp;
        const bigattacksound = new Audio("big_attack.mp3");
        bigattacksound.play();
    }
    if (montotalhp == 0 || montotalhp < 0) {
        winsound.play();
    }
});

addhpbtnmon2.addEventListener("click", function () {
    montotalhp = montotalhp + 10;
    monhp.innerHTML = montotalhp;
});

addhundred2.addEventListener("click", function () {
    montotalhp = montotalhp + 100;
    monhp.innerHTML = montotalhp;
});

