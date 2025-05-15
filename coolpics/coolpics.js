// Menu button to toggle menu
const menuButton = document.querySelector("#menu-button");
function toggleMenu() {
  const menu = document.querySelector("#menu"); 
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

// Reveal menu when screen is greater than 1000px
function handleResize() {
  const menu = document.querySelector("#menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

// Add click event for images
const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".modal");
const closeViewer = document.querySelector(".close-viewer");

gallery.querySelectorAll('img').forEach(image => {
  image.addEventListener('click', () => {
    modal.querySelector('img').src = image.src;
    modal.querySelector('img').alt = image.alt;
    modal.showModal();
  });
});

// Close box when 'X' is clicked
closeViewer.addEventListener('click', () => modal.close());

// Close when user clicks outside of image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
})