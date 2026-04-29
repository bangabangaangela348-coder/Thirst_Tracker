let total = 0;
let goal = 0;

// Load saved data
window.onload = function () {
    const savedGoal = localStorage.getItem("goal");
    const savedTotal = localStorage.getItem("total");

    if (savedGoal !== null) goal = parseInt(savedGoal) || 0;
    if (savedTotal !== null) total = parseInt(savedTotal) || 0;

    updateUI();
};

// Set Goal
function setGoal() {
    const input = parseInt(document.getElementById("goalInput").value);

    if (isNaN(input) || input <= 0) {
        alert("Enter a valid goal");
        return;
    }

    goal = input;
    localStorage.setItem("goal", goal);
    updateUI();
}

// Add Water
function addWater(amount) {
    total += amount;   
    localStorage.setItem("total", total);
    updateUI();
}

// Reset
function resetAll() {
    total = 0;
    goal = 0;

    localStorage.removeItem("goal");
    localStorage.removeItem("total");

    updateUI();
}

// Update UI
function updateUI() {
    document.getElementById("goalDisplay").innerText = "Goal: " + goal + " ml";
    document.getElementById("intakeDisplay").innerText = "Drank: " + total + " ml";

    let remaining = Math.max(goal - total, 0);
    document.getElementById("remainingDisplay").innerText = "Remaining: " + remaining + " ml";

    let percent = goal > 0 ? (total / goal) * 100 : 0;
    percent = Math.min(percent, 100);

    document.getElementById("progressBar").style.width = percent + "%";
}