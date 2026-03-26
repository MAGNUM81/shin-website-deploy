const targetDate = new Date("2026-04-11T18:00:00").getTime();
const root = document.getElementById("countdown");
// Utility to create a time block (e.g., "12 DAYS")
function createTimeBlock(label) {
    const container = document.createElement("div");
    container.className = "time-block";
    const value = document.createElement("p");
    value.className = "value";
    value.textContent = "00";
    const text = document.createElement("p");
    text.className = "label";
    text.textContent = label;
    container.appendChild(value);
    container.appendChild(text);
    return {
        container,
        value
    };
}
// Build DOM once
const days = createTimeBlock("J");
const hours = createTimeBlock("H");
const minutes = createTimeBlock("M");
const seconds = createTimeBlock("S");
root.appendChild(days.container);
root.appendChild(hours.container);
root.appendChild(minutes.container);
root.appendChild(seconds.container);
// Update logic
function updateCountdown() {
    const now = Date.now();
    const diff = targetDate - now;
    if (diff <= 0) {
        root.innerHTML = "<div class='done'>\uD83D\uDE80 It's live!</div>";
        return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor(diff / 3600000 % 24);
    const m = Math.floor(diff / 60000 % 60);
    const s = Math.floor(diff / 1000 % 60);
    days.value.textContent = String(d).padStart(2, "0");
    hours.value.textContent = String(h).padStart(2, "0");
    minutes.value.textContent = String(m).padStart(2, "0");
    seconds.value.textContent = String(s).padStart(2, "0");
}
setInterval(updateCountdown, 1000);
updateCountdown();

//# sourceMappingURL=shin-website-v2.4e4cbabe.js.map
