const character = {
      name: "Snortleblat",
      class: "Swamp Beat Diplomat",
      level: 5,
      health: 100,
      image: 'snortleblat.jpg',
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

document.querySelector('.image').src = character.image;
document.querySelector('.name').textContent = character.name;
document.querySelector('#class').textContent = character.class;

let level = document.querySelector('#level');
level.textContent = character.level;

let health = document.querySelector('#health');
health.textContent = character.health;

document.querySelector('#attacked').addEventListener('click', function() {
    character.attacked();
    level.textContent = character.level;
    health.textContent = character.health;
});

document.querySelector('#levelup').addEventListener('click', function() {
    character.levelUp();
    level.textContent = character.level;
    health.textContent = character.health;
});