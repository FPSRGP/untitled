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
