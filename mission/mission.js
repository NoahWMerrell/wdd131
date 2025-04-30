let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // change body to dark
        document.body.className = 'dark';

        // change logo to the new logo
        document.querySelector('#logo').setAttribute('src', 'byui-logo_white.png');
    } else {
        // remove dark class from body
        document.body.classList.remove('dark');
        // change logo back 
        document.querySelector('#logo').setAttribute('src', 'byui-logo_blue.webp');
    }
}