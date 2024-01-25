
let icon = document.querySelector("#icon");
let ul = document.querySelector("ul");


icon.addEventListener("click", () => {
    icon.classList.toggle("active");
    ul.classList.toggle("show");
});

