let darkTheme = false;

document.querySelector('.switch-theme').addEventListener('click', e => {
    if (darkTheme) {
        document.querySelector('.switch-theme-text').innerHTML = "Dark Mode";
        document.body.removeAttribute('data-theme');
        darkTheme=false;
    } else {
        document.querySelector('.switch-theme-text').innerHTML = "Light Mode";
        document.body.setAttribute('data-theme', 'dark')
        darkTheme=true;
    }
})