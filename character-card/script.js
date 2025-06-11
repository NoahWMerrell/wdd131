const character = {
      name: "Snortleblat",
      class: "Swamp Beat Diplomat",
      level: 5,
      health: 100,
      image: 'snortleblat.webp',
      attacked() {
        if (this.health >= 20) {
          // this.level -= 1;
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };

// Define querySelectors
let character_image = document.querySelector('.image');
let character_name = document.querySelector('.name');
let character_class = document.querySelector('#class');
let character_level = document.querySelector('#level');
let character_health = document.querySelector('#health');

// Set selected queries as their appropriate value
character_image.src = character.image;
character_name.textContent = character.name;
character_class.textContent = character.class;
character_level.textContent = character.level;
character_health.textContent = character.health;

// When the "Attacked" button is clicked
document.querySelector('#attacked').addEventListener('click', function() {
    character.attacked();
    character_level.textContent = character.level;
    character_health.textContent = character.health;
});

// When the "Level Up" button is clicked
document.querySelector('#levelup').addEventListener('click', function() {
    character.levelUp();
    character_level.textContent = character.level;
    character_health.textContent = character.health;
});