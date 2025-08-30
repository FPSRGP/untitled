# Jag.io
<input type="text" id="search-bar" placeholder="Search games...">

<script>
document.getElementById("search-bar").addEventListener("keyup", function() {
    const searchValue = this.value.toLowerCase();
    const games = document.querySelectorAll(".game-card");

    games.forEach(game => {
        const id = game.id.toLowerCase();
        const title = game.querySelector("h3").innerText.toLowerCase();
        
        if (id.includes(searchValue) || title.includes(searchValue)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
});
</script>





[
  {
    "id": "friday-night-funkin",
    "title": "Friday Night Funkin",
    "image": "fridaynightfunkin/logo.png",
    "link": "fridaynightfunkin/index.html"
  },
  {
    "id": "snow-rider-3d",
    "title": "Snow Rider 3D",
    "image": "snow_rider3d/snowrider3d.jpeg",
    "link": "snow_rider3d/index.html"
  }
]






<div id="container"></div>

<script>
fetch('games.json')
  .then(response => response.json())
  .then(games => {
    const container = document.getElementById('container');
    games.forEach(game => {
      const div = document.createElement('div');
      div.classList.add('game-card');
      div.id = game.id;
      div.innerHTML = `
        <a href="${game.link}">
          <img src="${game.image}" class="contented">
          <h3>${game.title}</h3>
        </a>
      `;
      container.appendChild(div);
    });
  });

// Search function
document.getElementById("search-bar").addEventListener("keyup", function() {
    const searchValue = this.value.toLowerCase();
    const games = document.querySelectorAll(".game-card");

    games.forEach(game => {
        const id = game.id.toLowerCase();
        const title = game.querySelector("h3").innerText.toLowerCase();
        
        if (id.includes(searchValue) || title.includes(searchValue)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
});
</script>
