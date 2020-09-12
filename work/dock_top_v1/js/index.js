var increment = 0.05;
var hideTimer;
var showTimer;

var menuicons = document.querySelectorAll('.animate');
for (var i = 0; i < menuicons.length; i++) {
    menuicons.item(i).style.cssText = `--delay1: ${0.1 + (i * increment)}s; --delay2: ${0.15 + (i * increment)}s;`;
}

function leave(trigger) {
    hideTimer = setTimeout(() => {
        trigger.classList.remove("show-dock");
    }, 1000)
    clearTimeout(showTimer);
}

function enter(trigger) {
    showTimer = setTimeout(() => {
        trigger.classList.add("show-dock");
    }, 200)
    clearTimeout(hideTimer);
}