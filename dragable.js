const tabsBox = document.querySelector(".translater-box");
let isDragging = false;

const dragging = (e) => {
    if (!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
    // Handle any logic related to dragging here
};

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
};

tabsBox.addEventListener("mousedown", (e) => {
    // Prevent text selection when starting to drag
    e.preventDefault();
    isDragging = true;
    tabsBox.style.cursor = "grabbing"; // Set custom cursor during dragging
});

tabsBox.addEventListener("mousemove", dragging);

document.addEventListener("mouseup", () => {
    dragStop();
    tabsBox.style.cursor = "grab"; // Restore default cursor after dragging stops
});