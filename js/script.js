// Simple retro-style fun fact generator

const factBtn = document.getElementById("factBtn");
const factBox = document.getElementById("factBox");

if (factBtn) {
    factBtn.addEventListener("click", function () {
        factBox.textContent = "Fun fact: A Game Boy survived a bombing in the Gulf War and STILL works!";
    });
}
