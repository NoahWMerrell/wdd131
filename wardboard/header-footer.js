function headerTemplate() {
  return `
  <a href="index.html">
    <img class="logo" src="images/wardboard-logo.png" alt="wardboard logo">
  </a>
  <nav>
    <a href="index.html">Home</a>
    <a href="events.html">Events</a>
    <a href="about.html">About</a>
  </nav>`;
}

let header = document.querySelector('header');
header.innerHTML = headerTemplate();

function footerTemplate() {
  return `
  <h3 class="copy">Wardboard &copy; 2025</h3>
  <h3>Noah Merrell</h3>`;
}

let footer = document.querySelector('footer');
footer.innerHTML = footerTemplate();