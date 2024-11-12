const easyMaps = [
  [
    [
      { type: "E", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 0 },
      { type: "O", rotation: 0 },
    ],
    [
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 1 },
    ],
    [
      { type: "O", rotation: 0 },
      { type: "M", rotation: 2 },
      { type: "B", rotation: 1 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "M", rotation: 3 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "E", rotation: 0 },
      { type: "M", rotation: 1 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "O", rotation: 0 },
    ],
  ],
  // Add other map variations here with rotation details
];

const hardMaps = [
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
      { type: "M", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "B", rotation: 1 },
    ],
    [
      { type: "O", rotation: 0 },
      { type: "M", rotation: 2 },
      { type: "B", rotation: 1 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 3 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "M", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "M", rotation: 1 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 2 },
    ],
    [
      { type: "B", rotation: 1 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 0 },
      { type: "B", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 0 },
      { type: "E", rotation: 0 },
    ],
    [
      { type: "E", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "M", rotation: 3 },
      { type: "E", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "B", rotation: 1 },
      { type: "O", rotation: 0 },
    ],
    [
      { type: "M", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "B", rotation: 1 },
      { type: "M", rotation: 0 },
      { type: "O", rotation: 0 },
      { type: "E", rotation: 0 },
      { type: "M", rotation: 0 },
    ],
  ],
  // Add other map variations here with rotation details
];

function isValidPlacement(tile, placedElementType, placedElementRotation) {
  const tileType = tile.dataset.type;
  const tileRotation = parseInt(tile.dataset.rotationIndex) || 0;

  switch (tileType) {
    case "B": // Bridge
      if (placedElementType === "straight") {
        if (
          (tileRotation === 0 && placedElementRotation === 0) || // Horizontal bridge with horizontal track
          (tileRotation === 1 && placedElementRotation === 1)
        ) {
          // Vertical bridge with vertical track
          return true;
        }
      }
      return false; // Any other track is invalid on a bridge

    case "M": // Mountain
      if (placedElementType === "corner") {
        return tileRotation === placedElementRotation; // Corner must match the mountain's orientation
      }
      return false; // Only corners allowed on mountains

    case "O": // Oasis
      return false; // No tracks allowed on oasis tiles

    case "E": // Empty
      return true; // Any track can be placed on empty tiles

    default:
      return false; // Just in case there's an invalid tile type
  }
}

function generateGrid(difficulty) {
  const gridContainer = document.getElementById("grid-container");
  let gridData;

  // Determine size and randomly select a map based on difficulty
  if (difficulty === "easy") {
    gridData = easyMaps[Math.floor(Math.random() * easyMaps.length)];
    gridContainer.style.gridTemplateColumns = `repeat(5, 60px)`; // For 5x5 grid
  } else if (difficulty === "hard") {
    gridData = hardMaps[Math.floor(Math.random() * hardMaps.length)];
    gridContainer.style.gridTemplateColumns = `repeat(7, 60px)`; // For 7x7 grid
  }

  // Clear existing grid if any
  gridContainer.innerHTML = "";

  // Generate the grid from the gridData
  gridData.forEach((row, rowIndex) => {
    row.forEach((tile, colIndex) => {
      // Create a div for each tile
      const tileDiv = document.createElement("div");
      tileDiv.classList.add("tile");
      tileDiv.dataset.type = tile.type; // Store the type (E, B, M, O)
      tileDiv.dataset.rotationIndex = tile.rotation; // Store the rotation index
      tileDiv.dataset.row = rowIndex;
      tileDiv.dataset.col = colIndex;

      // Add the tile to the container
      gridContainer.appendChild(tileDiv);

      // Update visual representation of the tile
      updateTileDisplay(tileDiv);
    });
  });
}

// Types of railway elements and their orientations
const railwayElements = ["none", "straight", "corner"];

// Max rotation index for each type of railway piece
const rotationsForElement = {
  none: 0, // No rotation needed
  straight: 2, // 2 orientations: Horizontal (0), Vertical (1)
  corner: 4, // 4 orientations: Top-Right (0), Top-Left (1), Bottom-Left (2), Bottom-Right (3)
};

// Function to handle tile placement when clicking
document
  .getElementById("grid-container")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("tile")) {
      const tile = event.target;
      let currentElementType = tile.dataset.elementType || "none";
      let currentElementIndex = railwayElements.indexOf(currentElementType);

      // Cycle through track types (none -> straight -> corner)
      currentElementIndex = (currentElementIndex + 1) % railwayElements.length;
      let nextElementType = railwayElements[currentElementIndex];
      tile.dataset.elementType = nextElementType;

      // Determine rotation for straight or corner pieces
      const placedElementRotation = parseInt(tile.dataset.rotationIndex) || 0;

      // Check if the placement is valid before updating
      if (isValidPlacement(tile, nextElementType, placedElementRotation)) {
        // If valid, apply the track and move on
        updateTileDisplay(tile);
      } else {
        alert("Invalid track placement! Make sure the track fits the terrain.");
        // Reset to 'none' if invalid placement (optional, you can just leave it as-is otherwise)
        tile.dataset.elementType = "none";
        tile.className = "tile"; // Reset visual
      }
    }
  });

// Function to handle rotation (right-click to rotate 90 degrees)
document
  .getElementById("grid-container")
  .addEventListener("contextmenu", function (event) {
    event.preventDefault(); // Prevent default context menu

    if (
      event.target.classList.contains("tile") &&
      event.target.dataset.elementType !== "none"
    ) {
      // Get current rotation and the max allowed for the current element
      let currentRotation = parseInt(event.target.dataset.rotationIndex) || 0;
      let maxRotation = rotationsForElement[event.target.dataset.elementType];

      // Increment rotation (cycle through orientations based on max allowed rotation)
      currentRotation = (currentRotation + 1) % maxRotation;
      event.target.dataset.rotationIndex = currentRotation;

      // Update display accordingly
      updateTileDisplay(event.target);
    }
  });

// Function to update the appearance of a tile based on its element type and rotation
function updateTileDisplay(tile) {
  tile.className = "tile"; // Clear all previous track visuals

  const elementType = tile.dataset.elementType || "none";
  const rotationIndex = parseInt(tile.dataset.rotationIndex) || 0;

  // Apply image based on the element type and orientation
  if (elementType === "straight") {
    // Apply horizontal or vertical straight images
    tile.classList.add(`straight-${rotationIndex}`);
  } else if (elementType === "corner") {
    // Apply corner images based on orientation
    tile.classList.add(`corner-${rotationIndex}`);
  }
}

// Get HTML elements
const startButton = document.getElementById("start-button");
const playerNameInput = document.getElementById("player-name");
const difficultySelect = document.getElementById("difficulty");

const rulesButton = document.getElementById("rules-button");
const closeRulesButton = document.getElementById("close-rules");
const rulesBox = document.getElementById("rules-box");

const menuScreen = document.getElementById("menu-screen");
const gameScreen = document.getElementById("game-screen");

const playerDisplay = document.getElementById("player-display");
const difficultyDisplay = document.getElementById("difficulty-display");
const timerDisplay = document.getElementById("timer-display");

// Function to switch to the game screen
function startGame() {
  const playerName = playerNameInput.value;
  const difficulty = difficultySelect.value;

  // Basic validation
  if (playerName.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  // Hide menu and show game screen
  menuScreen.classList.remove("visible");
  gameScreen.classList.add("visible");

  // Display player's name and difficulty
  playerDisplay.textContent = playerName;
  difficultyDisplay.textContent =
    difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

  // Start the timer as before
  startTimer();

  // Generate the grid with the corresponding difficulty level
  generateGrid(difficulty);
}

// Simple placeholder for starting a timer
function startTimer() {
  let seconds = 0;
  setInterval(() => {
    seconds++;
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    timerDisplay.textContent = `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }, 1000);
}

// Toggle the visibility of rules box
rulesButton.addEventListener("click", () => {
  rulesBox.classList.toggle("visible");
});

// Close rules box
closeRulesButton.addEventListener("click", () => {
  rulesBox.classList.remove("visible");
});

// Event listener for Start button
startButton.addEventListener("click", startGame);
