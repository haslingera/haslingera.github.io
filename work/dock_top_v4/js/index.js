var combinationPressed = false;
var increment = 0.05;

document.querySelector(".center-dock").classList.toggle("show-dock");

document.addEventListener("keydown", e => {
    if (!combinationPressed && e.key === "d") {
        toggleShow()
        combinationPressed = true;
    }
});

document.addEventListener("keyup", e => {
    combinationPressed = false;
});

document.querySelector('.header-icon').addEventListener('click', e => {
    toggleShow()
})

document.querySelector('.center-dock').addEventListener('click', e => {
    if(e.target !== e.currentTarget) return;
    toggleShow()
})

function toggleShow() {
    document.querySelector(".center-dock").classList.toggle("show-dock")
    var menuicons = document.querySelectorAll('.animate');
    for (var i = 0; i < menuicons.length; i++) {
        menuicons.item(i).style.transitionDelay = `${0.1 + (i * increment)}s, ${0.15 + (i * increment)}s`;
    }
    
}

