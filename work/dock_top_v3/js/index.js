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