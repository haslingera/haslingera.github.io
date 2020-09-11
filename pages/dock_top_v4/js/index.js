var combinationPressed = false;
document.querySelector(".center-dock").classList.toggle("show-dock")

document.addEventListener("keydown", e => {
    if (!combinationPressed && e.key === "d") {
        document.querySelector(".center-dock").classList.toggle("show-dock")
        combinationPressed = true;
    }
});

document.addEventListener("keyup", e => {
    combinationPressed = false;
});

document.querySelector('.header-icon').addEventListener('click', e => {
    document.querySelector(".center-dock").classList.toggle("show-dock")
})

document.querySelector('.center-dock').addEventListener('click', e => {
    document.querySelector(".center-dock").classList.toggle("show-dock")
})
