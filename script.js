    /* ---------------------------------------------------------
      For Training
    --------------------------------------------------------- */
    const algsS0 = {
      "1R": "R U' L' U R' U' L",
      "1L": "L' U R U' L U R'",
      "2R": "R U2 R' U' R U2' L' U R' U' L",
      "2L": "L' U2' L U L' U2 R U' L U R'",
      "3TR": "R E' R E R2 E R' E' R",
      "3TL": "L' E L' E' L2' E' L E L'",
      "nShapeL": "L' U R U' L U R' R U' L' U R' U' L",
      "nShapeR": "R U' L' U R' U' L L' U R U' L U R'",
      "LShapeL": "L' D L2 D' L D2 L D D' L' D2 L' D L2 D' L",
      "LShapeR": "R' D' R2 D R D2 R D' D R' D2 R' D' R2 D R",
      "TShapeL": "L' E L' E' L2' E' L E L' L' E L' E' L2' E' L E L' L' E L' E' L2' E' L E L'",
      "TShapeR": "R E' R E R2 E R' E' R R E' R E R2 E R' E' R R E' R E R2 E R' E' R",
    }
    /* ---------------------------------------------------------
      S1 — your current working algorithms (79 Moves)
    --------------------------------------------------------- */
    const algsS1 = {
      "solveStep1": "L' R2 F' U F U2 B2 U2 B' R' U2 R U",
      "solveStep2": "R U' L' U R' U' L R U' L' U R' U' L R U2 R' U' R U2' L' U R' U' L U'",
      "solveStep3": "B2 E B2 E' R' E2 R L E2 L' B E B' E2 F' E F E' L E2 L' E F2 E F' E2 F'",
      "solveStep4": "F E' F E F2 E F' E' F",
      "solveStep5": "B2 E B2 E",
      "resetStep1": "U' R' U2 R B U2 B2 U2 F' U' F R2 L",
      "resetStep2": "U L' U R U' L U2 R' U R U2 R' L' U R U' L U R' L' U R U' L U R'",
      "resetStep3": "F E2 F E' F2 E' L E2 L' E F' E' F E2 B E' B' L E2 L' R' E2 R E B2 E' B2",
      "resetStep4": "F' E F E' F2 E' F' E F'",
      "resetStep5": "E' B2 E' B2",

      "FullSolve": "L' R2 F' U F U2 B2 U2 B' R' U2 R U R U' L' U R' U' L R U' L' U R' U' L R U2 R' U' R U2' L' U R' U' L U' " +
                  "B2 E B2 E' R' E2 R L E2 L' B E B' E2 F' E F E' L E2 L' E F2 E F' E2 F' F E' F E F2 E F' E' F B2 E B2 E ",
      "Scramble": "R2 F2 R2 B2 D2 L2 U' R B' U2 R2 L2 F R2 F' L2 F' R2 L2 D2"
    };

    /* ---------------------------------------------------------
      S2 — another NEW algorithm set (61 Moves) 
    --------------------------------------------------------- */
    const algsS2 = {
      "solveStep1": "U L U B F R F'",
      "solveStep2": "F U' B' U F' U' B B' U2 B U B' U2 F U' B  U F' U2",
      "solveStep3": "E2 B' E2 B F' E F L E2 L' R E2 R' F E2 F' R' E2 R",
      "solveStep4": "L2 E L2 F E' F E F2 E F' E' F",
      "solveStep5": "B2 E' B2 E",
      "resetStep1": "F R' F' B' U' L' U'",
      "resetStep2": "U2 F U' B' U F' U2 B U' B' U2 B B' U F U' B U F'",
      "resetStep3": "R' E2 R F E2 F' R E2 R' L E2 L' F' E' F B' E2 B E2",
      "resetStep4": "F' E F E' F2 E' F' E F' L2 E' L2",
      "resetStep5": "E' B2 E B2",
      "FullSolve":  "U L U B F R F' F U' B' U F' U' B B' U2 B U B' U2 F U' B  U F' U2 E2 B' E2 B F' E F L E2 L' R E2 R' F E2 F' R' E2 R L2 E L2 F E' F E F2 E F' E' F B2 E' B2 E",
      "Scramble":   "U' D' F U F' R D2 R D' L F L2 U2 R2 F' D2 R2 B L2 D2 B"
    };


    /* ---------------------------------------------------------
      S3 — another NEW algorithm set (75 Moves)
    --------------------------------------------------------- */
    const algsS3 = {
      "solveStep1": "D' R' D R' F U2 F' U2 L U' L'",
      "solveStep2": "B U' F' U B' U' F L U2 L' U' L U2 R' U L' U' R U2",
      "solveStep3": "E B' E B E2 L' E L2 E2 L' E' F E' F E F' E2 F' E R E R2 E2 R",
      "solveStep4": "L' E' L E L2 E L' E' L' L E' L E L2 E L' E' L",
      "solveStep5": "B2 E2 B2",
      "resetStep1": "L U L' U2 F U2 F' R D' R D",
      "resetStep2": "U2 R' U L U' R U2 L' U L U2 L' F' U B U' F U B'",
      "resetStep3": "R' E2 R2 E' R' E' F E2 F E' F' E F' E L E2 L2 E' L E2 B' E' B E'",
      "resetStep4": "L' E L E' L2 E' L' E L' L E L E' L2 E' L' E L",
      "resetStep5": "B2 E2 B2",
      "FullSolve":  "D' R' D R' F U2 F' U2 L U' L' B U' F' U B' U' F L U2 L' U' L U2 R' U L' U' R U2 E B' E B E2 L' E L2 E2 L' E' F E' F E F' E2 F' E R E R2 E2 R L' E' L E L2 E L' E' L' L E' L E L2 E L' E' L B2 E2 B2",
      "Scramble":  "D' L U2 F' R' L2 U F U R D2 R2 L D2 R B2 L' F2 D2 B2"
    };

    /* ---------------------------------------------------------
      ACTIVE SET SWITCHING
    --------------------------------------------------------- */
    let activeSet = "S0";

    function getAlgs() {
      return activeSet === "S0" ? algsS0 :
            activeSet === "S1" ? algsS1 :
            activeSet === "S2" ? algsS2 :
                                  algsS3;
    }

    window.setMode = function(mode) {
      activeSet = mode;
      console.log("Active Algorithm Set:", activeSet);
    };

    window.setActiveModeButton = function(button) {
      document.querySelectorAll('.mode-buttons button')
        .forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    };

    /* ---------------------------------------------------------
      Your original script continues here
    --------------------------------------------------------- */

    let accumulatedAlg = "";

const player = document.getElementById("cube");
const speedRange = document.getElementById("speedRange");
const speedLabel = document.getElementById("speedLabel");
const defaultSpeed = 2.0;

// 1. Set up the input slider element values immediately if they exist
if (speedRange) {
    speedRange.value = defaultSpeed;
}
if (speedLabel) {
    speedLabel.textContent = defaultSpeed.toFixed(2) + "x";
}

// 2. Safely apply the speed to the player ONLY when it is fully ready
function applySpeed(speedValue) {
    if (player) {
        // If it's a custom web component, we check if its methods are available
        try {
            player.tempoScale = speedValue;
        } catch (e) {
            console.log("Cube component still loading, retrying speed attachment...");
        }
    }
}

// Try applying the default speed initially
if (player) {
    // If it's a custom element, wait for it to be defined or ready
    if (customElements && customElements.whenDefined && player.tagName.includes('-')) {
        customElements.whenDefined(player.tagName.toLowerCase()).then(() => {
            applySpeed(defaultSpeed);
        });
    } else {
        // Fallback for standard objects/elements
        setTimeout(() => applySpeed(defaultSpeed), 100);
    }
}

// 3. Keep the input listener listening safely
if (speedRange) {
    speedRange.addEventListener("input", () => {
        const v = parseFloat(speedRange.value);
        applySpeed(v);
        if (speedLabel) {
            speedLabel.textContent = v.toFixed(2) + "x";
        }
    });
}

function scrambleCube() {
    const algs = getAlgs();
    accumulatedAlg = algs["Scramble"];
    player.pause?.();
    player.alg = accumulatedAlg;
    player.play?.();
}

customElements.whenDefined("twisty-player").then(() => {
    player.addEventListener("ready", () => {
    scrambleCube();
    });
});

function setAlgReset(name) {
    const algs = getAlgs();
    accumulatedAlg = "";
    player.pause?.();
    player.jumpToStart?.();
    player.alg = algs[name];
    player.play?.();
}

function setAlgContinue(name) {
    const algs = getAlgs();
    if (!accumulatedAlg) {
    accumulatedAlg = algs["Scramble"];
    }
    accumulatedAlg += " " + algs[name];
    player.pause?.();
    player.alg = accumulatedAlg.trim();
    player.play?.();
}

function setActiveButton(button) {
    document.querySelectorAll('#controls button, #solving-controls button')
    .forEach(btn => {
        btn.classList.remove('active', 'selected-btn');
    });

    button.classList.add('active');
}

window.setActiveButton = setActiveButton;
window.setAlgReset = setAlgReset;
window.setAlgContinue = setAlgContinue;
window.scrambleCube = scrambleCube;

/* Disable right-click */
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

/* Disable F12, Ctrl+Shift+I, Ctrl+U */
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
    (e.ctrlKey && e.shiftKey && e.key === 'I') || 
    (e.ctrlKey && e.key === 'u')) {
    e.preventDefault();
    }
});