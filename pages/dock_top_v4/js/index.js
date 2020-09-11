var combinationPressed = false;
document.querySelector(".center-dock").classList.toggle("show-dock")

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
    toggleShow()
})

function toggleShow() {
    document.querySelector(".center-dock").classList.toggle("show-dock")
    var menuicons = document.querySelectorAll('.menu-icon');
    for (var i = 0; i < menuicons.length; i++) {
        menuicons.item(i).classList.toggle("show-dock");
    }
}