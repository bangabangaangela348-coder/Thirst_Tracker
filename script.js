let total = 0;
let goal = 0;

// Load saved data
window.onload = function () {
    goal = parseInt(localStorage.getItem("goal")) || 0;
    total = parseInt(localStorage.getItem("total")) || 0;
    updateUI();
};

// Set goal
function setGoal() {
    let input = document.getElementById("goalInput").value;
    goal = parseInt(input) || 0;

    localStorage.setItem("goal", goal);
    updateUI();
}

// Add water
function addWater(amount) {
    total += amount;
    localStorage.setItem("total", total);
    updateUI();
}

// Reset
function resetAll() {
    total = 0;
    goal = 0;

    localStorage.removeItem("total");
    localStorage.removeItem("goal");

    updateUI();
}

// Update UI
function updateUI() {
    document.getElementById("goalDisplay").innerText = `Goal: ${goal} ml`;
    document.getElementById("intakeDisplay").innerText = `Drank: ${total} ml`;

    let remaining = Math.max(goal - total, 0);
    document.getElementById("remainingDisplay").innerText = `Remaining: ${remaining} ml`;

    let percent = goal > 0 ? (total / goal) * 100 : 0;
    percent = Math.min(percent, 100);

    document.getElementById("progressBar").style.width = percent + "%";
}