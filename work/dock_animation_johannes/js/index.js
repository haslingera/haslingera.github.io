/*var combinationPressed = false;
var increment = 0.05;

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
    var menuicons = document.querySelectorAll('.animate');
    for (var i = 0; i < menuicons.length; i++) {
        menuicons.item(i).style.transitionDelay = `${0.1 + (i * increment)}s, ${0.15 + (i * increment)}s`;
    }
    
}*/

let menuentries = document.querySelectorAll('.menu-entry');
var clone;
var currentEntry;

var pressedX;
var pressedY;

for (let i = 0; i < menuentries.length; i++) {
    const menuentry = menuentries[i];
    menuentry.addEventListener('mousedown', (event) => {

        var rect = event.target.getBoundingClientRect();
        pressedX = event.clientX - rect.left;
        pressedY = event.clientY - rect.top;

        clone = event.currentTarget.cloneNode(true);
        clone.style.position = "absolute";
        clone.style.left = (event.clientX - pressedX) + 'px';
        clone.style.top = (event.clientY - pressedY) + 'px';
        document.querySelector('body').appendChild(clone);

        event.currentTarget.classList.add('hide');
    })

    menuentry.addEventListener('mouseup', (event) => {
        event.currentTarget.classList.remove('hide');
        clone.remove();
    })

    /*menuentry.addEventListener('mouseleave', (event) => {
        event.currentTarget.classList.remove('hide');
        clone.remove();
    })*/
}

document.addEventListener('mousemove', (event) => {
    if (mouseDown && clone) {
        clone.style.left = (event.clientX - pressedX) + 'px';
        clone.style.top = (event.clientY - pressedY) + 'px';
    }
})

var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}