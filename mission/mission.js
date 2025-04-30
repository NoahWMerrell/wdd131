let selectElem = document.querySelector('select'); // Add variable for select
let logo = document.querySelector('#logo'); // Add variable for logo

selectElem.addEventListener('change', changeTheme); // When select changes runs the changeTheme function

function changeTheme() {
    let current = selectElem.value; // Get value from selector
    if (current == 'dark') {
        document.body.className = 'dark'; // Change body to dark by adding the dark class
        logo.setAttribute('src', 'byui-logo_white.png'); // Change logo to the new logo
    } else {
        document.body.classList.remove('dark'); // Remove dark class from body
        logo.setAttribute('src', 'byui-logo_blue.webp'); // Change logo back
    }
}