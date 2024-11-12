// Variables to track game start stats
let gameStartTime = null;
let timerInterval = null;

// Expanded 5x5 maps for Easy mode (3 maps)
const easyMaps_5x5 = [
  [
    [
      { type: "E", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "O", rotation: 0 },
    ],
    [
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "O", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "B", rotation: 1 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
    ],
  ],
  [
    [
      { type: "E", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "O", rotation: 0 },
    ],
    [
      { type: "M", rotation: 1 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "O", rotation: 0 },
    ],
    [
      { type: "M", rotation: 2 },
      { type: "B", rotation: 1 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "M", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 1 },
    ],
    [
      { type: "E", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "E", rotation: 0 },
    ],
  ],
  [
    // New Example Map
    [
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "E", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "B", rotation: 1 },
      { type: "O", rotation: 0 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "E", rotation: 0 },
      { type: "M", rotation: 2 },
      { type: "O", rotation: 0 },
      { type: "M", rotation: 3 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "M", rotation: 1 },
      { type: "E", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 0 },
    ],
    [
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
    ],
  ],
];

// Expanded 7x7 maps for Hard mode (3 maps)
const hardMaps_7x7 = [
  [
    [
      { type: "E", rotation: 0 },
      { type: "M", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 1 },
      { type: "O", rotation: 0 },
    ],
    [
      { type: "O", rotation: 0 },
      { type: "M", rotation: 2 },
      { type: "M", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "O", rotation: 0 },
    ],
    [
      { type: "M", rotation: 3 },
      { type: "B", rotation: 1 },
      { type: "O", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "M", rotation: 2 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 0 },
    ],
    [
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "M", rotation: 1 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "O", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "M", rotation: 3 },
      { type: "O", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "B", rotation: 1 },
      { type: "M", rotation: 1 },
    ],
    [
      { type: "M", rotation: 2 },
      { type: "E", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "M", rotation: 0 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "E", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "M", rotation: 1 },
      { type: "E", rotation: 0 },
      { type: "B", rotation: 1 },
      { type: "E", rotation: 0 },
      { type: "O", rotation: 0 },
    ],
  ],
  [
    [
      { type: "E", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 0 },
    ],
    [
      { type: "M", rotation: 1 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "B", rotation: 1 },
      { type: "O", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "E", rotation: 0 },
      { type: "M", rotation: 2 },
      { type: "O", rotation: 0 },
      { type: "M", rotation: 3 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 1 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 0 },
    ],
    [
      { type: "B", rotation: 1 },
      { type: "O", rotation: 0 },
      { type: "M", rotation: 2 },
      { type: "O", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "M", rotation: 1 },
      { type: "O", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 3 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "O", rotation: 0 },
    ],
    [
      { type: "E", rotation: 0 },
      { type: "M", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 1 },
    ],
  ],
  [
    // New Example 7x7 Map
    [
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "M", rotation: 3 },
      { type: "E", rotation: 0 },
      { type: "B", rotation: 0 },
    ],
    [
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 2 },
      { type: "O", rotation: 0 },
      { type: "B", rotation: 1 },
      { type: "O", rotation: 0 },
      { type: "M", rotation: 1 },
    ],
    [
      { type: "M", rotation: 1 },
      { type: "E", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "M", rotation: 2 },
      { type: "E", rotation: 0 },
      { type: "B", rotation: 1 },
    ],
    [
      { type: "O", rotation: 0 },
      { type: "M", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "M", rotation: 3 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "M", rotation: 2 },
      { type: "O", rotation: 0 },
      { type: "B", rotation: 1 },
      { type: "E", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 1 },
    ],
    [
      { type: "E", rotation: 0 },
      { type: "M", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "M", rotation: 1 },
      { type: "B", rotation: 1 },
      { type: "O", rotation: 0 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "B", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "M", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 3 },
      { type: "E", rotation: 0 },
      { type: "O", rotation: 0 },
    ],
  ],
];

const modalDialog = document.querySelector("#modal-dialog");
const modalMessage = document.querySelector("#modal-message");
const confirmModal = document.querySelector("#modal-confirm");
const modalConfirmYes = document.querySelector("#confirm-yes");
const modalConfirmNo = document.querySelector("#confirm-no");

function showModal(message) {
  modalMessage.textContent = message;
  modalDialog.classList.add("active");
}

document.querySelector("#close-modal").addEventListener("click", () => {
  modalDialog.classList.remove("active");
});

function showConfirmModal(callback) {
  confirmModal.classList.add("active");
  modalConfirmYes.onclick = () => {
    confirmModal.classList.remove("active");
    callback(true);
  };
  modalConfirmNo.onclick = () => {
    confirmModal.classList.remove("active");
    callback(false);
  };
}

function startTimer() {
  gameStartTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsedSeconds = Math.floor((Date.now() - gameStartTime) / 1000);
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    document.querySelector("#timer-display").textContent = `${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, 1000);
}

document.querySelector("#start-button").addEventListener("click", () => {
  const playerName = document.querySelector("#player-name").value.trim();
  const selectedDifficulty = document.querySelector(
    'input[name="difficulty"]:checked'
  ).value;

  if (!playerName) {
    return showModal("Please enter your name.");
  }

  document.querySelector("#menu-screen").classList.remove("visible");
  document.querySelector("#game-screen").classList.add("visible");

  document.querySelector("#player-display").textContent = playerName;
  document.querySelector("#difficulty-display").textContent =
    selectedDifficulty.toUpperCase();

  generateGrid(selectedDifficulty);
  startTimer();
});

function saveGame() {
  const playerName = document.querySelector("#player-display").textContent;
  const difficulty = document
    .querySelector("#difficulty-display")
    .textContent.toLowerCase();
  const gridData = Array.from(
    document.querySelectorAll("#grid-container .tile")
  ).map((tile) => {
    return {
      type: tile.dataset.type,
      rotationIndex: tile.dataset.rotationIndex,
      elementType: tile.dataset.elementType,
    };
  });
  const elapsedTime = Math.floor((Date.now() - gameStartTime) / 1000);

  const gameState = {
    playerName,
    difficulty,
    gridData,
    elapsedTime,
  };

  localStorage.setItem("savedGameState", JSON.stringify(gameState));
  showModal("Game saved successfully!");
}

function loadGame() {
  const savedGameState = localStorage.getItem("savedGameState");
  if (!savedGameState) {
    showModal("No saved game found.");
    return;
  }

  const { playerName, difficulty, gridData, elapsedTime } =
    JSON.parse(savedGameState);

  document.querySelector("#menu-screen").classList.remove("visible");
  document.querySelector("#game-screen").classList.add("visible");
  document.querySelector("#player-display").textContent = playerName;
  document.querySelector("#difficulty-display").textContent =
    difficulty.toUpperCase();

  const gridContainer = document.querySelector("#grid-container");
  const isHard = difficulty === "hard";
  gridContainer.style.gridTemplateColumns = `repeat(${isHard ? 7 : 5}, 60px)`;
  gridContainer.innerHTML = "";

  gridData.forEach((tileData) => {
    const tileDiv = document.createElement("div");
    tileDiv.classList.add("tile");
    tileDiv.dataset.type = tileData.type;
    tileDiv.dataset.rotationIndex = tileData.rotationIndex;
    tileDiv.dataset.elementType = tileData.elementType;
    gridContainer.appendChild(tileDiv);
    updateTileDisplay(tileDiv);
  });

  gameStartTime = Date.now() - elapsedTime * 1000;
  startTimer();
}

document.querySelector("#save-button").addEventListener("click", saveGame);

if (localStorage.getItem("savedGameState")) {
  showConfirmModal((confirmed) => {
    if (confirmed) {
      loadGame();
    }
  });
}

document.querySelector("#rules-button").addEventListener("click", () => {
  const rulesBox = document.querySelector("#rules-box");
  rulesBox.classList.toggle("visible");
});

document.querySelector("#grid-container").addEventListener("click", (event) => {
  if (event.target.classList.contains("tile")) {
    const tile = event.target;
    const type = tile.dataset.type;

    if (type === "M") {
      tile.dataset.elementType = "corner";
    } else if (type === "B") {
      tile.dataset.elementType = "straight";
    } else if (type === "E") {
      const currentElementType = tile.dataset.elementType || "none";
      const nextElementType =
        currentElementType === "none"
          ? "straight"
          : currentElementType === "straight"
          ? "corner"
          : "none";
      tile.dataset.elementType = nextElementType;
    }
    updateTileDisplay(tile);
  }
});

document
  .querySelector("#grid-container")
  .addEventListener("contextmenu", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("tile")) {
      const tile = event.target;

      if (tile.dataset.type === "E") {
        const currentRotation = parseInt(tile.dataset.rotationIndex) || 0;
        const elementType = tile.dataset.elementType || "none";
        const maxRotation = elementType === "straight" ? 2 : 4;
        tile.dataset.rotationIndex = (currentRotation + 1) % maxRotation;
        updateTileDisplay(tile);
      }
    }
  });

function updateTileDisplay(tile) {
  tile.className = "tile";

  const { type, rotationIndex = 0, elementType = "none" } = tile.dataset;

  tile.classList.add(`${type}`);

  if (type === "B") {
    tile.classList.add(
      elementType === "straight"
        ? rotationIndex === "0"
          ? "bridge_rail_horizontal"
          : "bridge_rail_vertical"
        : rotationIndex == "0"
        ? "bridge_horizontal"
        : "bridge_vertical"
    );
  }

  if (type === "M") {
    tile.classList.add(`mountain_empty_${rotationIndex}`);
    if (elementType === "corner") {
      tile.classList.add(`mountain_rail_${rotationIndex}`);
    }
  }

  if (type === "E") {
    if (elementType === "straight") {
      tile.classList.add(`straight-${rotationIndex}`);
    } else if (elementType === "corner") {
      tile.classList.add(`corner-${rotationIndex}`);
    }
  }
}

function generateGrid(difficulty) {
  const gridContainer = document.querySelector("#grid-container");
  let gridData = [];

  if (difficulty === "easy") {
    gridData = easyMaps_5x5[Math.floor(Math.random() * easyMaps_5x5.length)];
    gridContainer.style.gridTemplateColumns = `repeat(5, 60px)`;
  } else if (difficulty === "hard") {
    gridData = hardMaps_7x7[Math.floor(Math.random() * hardMaps_7x7.length)];
    gridContainer.style.gridTemplateColumns = `repeat(7, 60px)`;
  }

  gridContainer.innerHTML = "";

  gridData.forEach((row) => {
    row.forEach((tile) => {
      const tileDiv = document.createElement("div");
      tileDiv.classList.add("tile");
      tileDiv.dataset.type = tile.type;
      tileDiv.dataset.rotationIndex = tile.rotation;
      tileDiv.dataset.elementType = "none";
      gridContainer.appendChild(tileDiv);
      updateTileDisplay(tileDiv);
    });
  });
}
