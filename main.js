
let icon = document.querySelector("#icon");
let ul = document.querySelector("ul");


icon.addEventListener("click", () => {
    icon.classList.toggle("active");
    ul.classList.toggle("show");
});

// document.querySelectorAll(".nav-links").forEach(n => n.
//     addEventListener("click", () => {
//         icon.classList.remove("active");
//         ul.classList.remove("active");
//     }));