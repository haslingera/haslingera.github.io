var increment = 0.05;
var hideTimer;
var showTimer;

var menuicons = document.querySelectorAll('.animate');
for (var i = 0; i < menuicons.length; i++) {
    menuicons.item(i).style.cssText = `--delay1: ${0.1 + (i * increment)}s; --delay2: ${0.15 + (i * increment)}s;`;
}

document.querySelector('.header-container').addEventListener('mouseenter', enter)
document.querySelector('.header-container').addEventListener('mouseleave', leave)

function leave(event) {
    hideTimer = setTimeout(() => {
        event.target.classList.remove("show-dock");
    }, 1000)
    clearTimeout(showTimer);
}

function enter(event) {
    showTimer = setTimeout(() => {
        event.target.classList.add("show-dock");
    }, 200)
    clearTimeout(hideTimer);
}

let recents = document.querySelector('.recents');
let filters = document.querySelector('.filters');
let search = document.querySelector('.search');
let searchHeader = document.querySelector('.search-results-header');
let searchIcon = document.querySelector('.search-icon');
let input = document.querySelector('.search-input');
let welcomeMessage = document.querySelector('.welcome-message');
let searchContainer = document.querySelector('.search-container');

input.addEventListener('input', e => {
    checkInput();
})

searchIcon.addEventListener('click', e => {
    input.value = '';
    checkInput();
})

document.onkeydown= function (e){
    input.focus();
}

function checkInput () {
    let value = input.value;
    let randomSearchResult = Math.floor(Math.random() * 10000);

    if (value == '') {
        recents.classList.remove('hidden');
        filters.classList.remove('hidden');
        welcomeMessage.classList.remove('no-welcome');
        searchContainer.classList.remove('searched');
        search.classList.add('hidden');
        searchIcon.classList.add('invisible');
    } else {
        recents.classList.add('hidden');
        filters.classList.add('hidden');
        welcomeMessage.classList.add('no-welcome');
        searchContainer.classList.add('searched');
        search.classList.remove('hidden');
        searchIcon.classList.remove('invisible');
        searchHeader.innerHTML = `${randomSearchResult.toLocaleString()} search results for '${value.trim()}'`        
    }
}

function fillInput (e) {
    input.value = e.innerHTML;
    checkInput ();
}

