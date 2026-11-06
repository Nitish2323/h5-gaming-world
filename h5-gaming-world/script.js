const games = [
    {
        name: "Snake Adventure",
        category: "Arcade",
        icon: "🐍",
        description: "Eat, grow and beat your high score.",
        color: "linear-gradient(135deg, #164d42, #172c36)"
    },
    {
        name: "Puzzle Master",
        category: "Puzzle",
        icon: "🧩",
        description: "Challenge your brain with puzzles.",
        color: "linear-gradient(135deg, #58327f, #252044)"
    },
    {
        name: "Speed Racing",
        category: "Racing",
        icon: "🏎️",
        description: "Race against time and win.",
        color: "linear-gradient(135deg, #75352e, #32203e)"
    },
    {
        name: "Space Shooter",
        category: "Action",
        icon: "🚀",
        description: "Defend the galaxy from enemies.",
        color: "linear-gradient(135deg, #174d75, #202447)"
    },
    {
        name: "Tic Tac Toe",
        category: "Puzzle",
        icon: "❌",
        description: "Play the classic strategy game.",
        color: "linear-gradient(135deg, #62428e, #292343)"
    },
    {
        name: "Basketball Star",
        category: "Arcade",
        icon: "🏀",
        description: "Shoot hoops and score points.",
        color: "linear-gradient(135deg, #75451f, #33233b)"
    }
];

const gameGrid = document.getElementById("gameGrid");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

let selectedCategory = "All";

function displayGames() {
    const searchText = searchInput.value.toLowerCase();

    const filteredGames = games.filter(function(game) {
        const matchesSearch = game.name.toLowerCase().includes(searchText);
        const matchesCategory =
            selectedCategory === "All" ||
            game.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    gameGrid.innerHTML = "";

    filteredGames.forEach(function(game) {
        const card = document.createElement("article");
        card.className = "game-card";

        card.innerHTML = `
            <div class="game-image" style="background: ${game.color}">
                ${game.icon}
            </div>
            <div class="game-info">
                <h3>${game.name}</h3>
                <p>${game.description}</p>
                <button type="button"
                    onclick="playGame('${game.name}')">
                    Play Now →
                </button>
            </div>
        `;

        gameGrid.appendChild(card);
    });

    noResults.hidden = filteredGames.length !== 0;
}

document.querySelectorAll(".category").forEach(function(button) {
    button.addEventListener("click", function() {
        document.querySelector(".category.active").classList.remove("active");
        button.classList.add("active");
        selectedCategory = button.dataset.category;
        displayGames();
    });
});

searchInput.addEventListener("input", displayGames);

function playGame(gameName) {
    alert(gameName + " will be playable in our upcoming game development step!");
}

displayGames();
