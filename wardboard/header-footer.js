function headerTemplate() {
  return `
  <a href="index.html">
    <img class="logo" src="images/wardboard-logo.png" alt="wardboard logo">
  </a>
  <nav>
    <a href="index.html">Home</a>
    <a href="events.html">Events</a>
    <a href="index.html">About</a>
  </nav>`;
}

let header = document.querySelector('header');
header.innerHTML += headerTemplate();