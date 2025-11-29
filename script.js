const heading = document.querySelector(".heading");
const btn = document.querySelector(".btn");
const card = document.querySelector(".card");
const backImg = document.querySelector(".backImg");

btn.addEventListener("click", () => {
    card.style.display = "flex";
    backImg.style.filter = "blur(5px)";
})

backImg.addEventListener("click", () => {
    card.style.display = "none";
    backImg.style.filter = "blur(0px)";
})