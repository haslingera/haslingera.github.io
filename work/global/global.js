let darkTheme = false;

document.querySelector('.switch-theme').addEventListener('click', e => {
    if (darkTheme) {
        document.body.removeAttribute('data-theme');
        darkTheme=false;
    } else {
        document.body.setAttribute('data-theme', 'dark')
        darkTheme=true;
    }
})