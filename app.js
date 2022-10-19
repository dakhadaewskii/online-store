window.onscroll = function showHeader() {

    let header = document.querySelector('.head');

    if(window.pageYOffset > 200) {
        header.classList.add('head-fixed')
    } else {
        header.classList.remove('head-fixed')
    }
}

//выбор города

let towns = 'towns';
let search = document.getElementById(towns);

function selectKaspiysk() {
    search.innerHTML = 'Каспийск';
};

function selectMoscow() {
    search.innerHTML = 'Москва';
};

function selectSaintPetersburg() {
    search.innerHTML = 'Санкт-Петербург';
};

function searchRostovOnDon() {
    search.innerHTML = 'Ростов-на-Дону';
};

function searchMachachkala() {
    search.innerHTML = 'Махачкала';
};

function searchSaratov() {
    search.innerHTML = 'Саратов';
};

function searchNizhnyNovgorod() {
    search.innerHTML = 'Нижний Новгород';
};

function searchKhabarovsk() {
    search.innerHTML = 'Хабаровск';
};

function searchDerbent() {
    search.innerHTML = 'Дербент';
};

//выбор города
