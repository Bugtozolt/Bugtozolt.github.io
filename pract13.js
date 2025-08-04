// warrior hp and mp get!!!!!!
const warhp = document.querySelector(".hpbox3");
const minushpbtn = document.querySelector(".mw");
const addhpbtn = document.querySelector(".aw");
let wartotalhp = 500;
warhp.innerHTML = wartotalhp;

minushpbtn.addEventListener("click", function () {
    if (wartotalhp > 0) {
        wartotalhp = wartotalhp - 10;
        warhp.innerHTML = wartotalhp;
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
});

addmpbtn.addEventListener("click", function () {
    wartotalmp = wartotalmp + 10;
    warmp.innerHTML = wartotalmp;
});

//mame hp and mp get!!!

const magehp = document.querySelector(".hpbox1");
const minushpbtnm = document.querySelector(".hpm");
const addhpbtnm = document.querySelector(".addm");
let magetotalhp = 400;
magehp.innerHTML = magetotalhp;

minushpbtnm.addEventListener("click", function () {
    if (magetotalhp > 0) {
        magetotalhp = magetotalhp - 10;
        magehp.innerHTML = magetotalhp;
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

let montotalhp = 0;
monhp.innerHTML = montotalhp;

minushpbtnmon.addEventListener("click", function () {
    if (montotalhp > 0) {
        montotalhp = montotalhp - 10;
        monhp.innerHTML = montotalhp;
    }
});

minushundred.addEventListener("click", function () {
    if (montotalhp > 0) {
        montotalhp = montotalhp - 100;
        if (montotalhp < 0) {
            montotalhp = 0;
        }
        monhp.innerHTML = montotalhp;
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
});

minushundred2.addEventListener("click", function () {
    if (montotalhp > 0) {
        montotalhp = montotalhp - 100;
        if (montotalhp < 0) {
            montotalhp = 0;
        }
        monhp.innerHTML = montotalhp;
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