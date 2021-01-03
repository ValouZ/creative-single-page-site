const burger = document.getElementById("app-burger");
const slideButtons = document.getElementById("app-buttons").children;
const previousButton = document.getElementById("app-previous");
const nextButton = document.getElementById("app-next");
const mainDescription = document.getElementById("app-main");
const dateDescription = document.getElementById("app-date");
const titleSlider = document.getElementById("app-title");
const imageSlider = document.getElementById("app-image");
let imageSliderIndice = 1;
let contentArray = [
    ["Lean Product Roadmap", "2019 project", "Brand naming & guidelines"],
    ["New Majestic Hotel", "2018 Project", "Brand identity & merchandise"],
    ["Crypto Dashboard", "2016 Project", "Brand identity & web design"]
]

// Event listener used to display the content of the burger menu
burger.addEventListener("click", displayBurgerMenu);

for (let i = 0; i < slideButtons.length; i++) {
    slideButtons[i].addEventListener("click", slideContent);
}

// Add or remove "close" class from the burger
function displayBurgerMenu() {
    burger.classList.toggle("close");
}

function slideContent() {
    imageSlider.classList.remove("image" + imageSliderIndice);
    if (this == previousButton) {
        imageSliderIndice--;
        if (imageSliderIndice < 1) {
            imageSliderIndice = 3;
        }
    } else {
        imageSliderIndice++;
        if (imageSliderIndice > 3) {
            imageSliderIndice = 1;
        }
    }
    imageSlider.classList.add("image" + imageSliderIndice);

    // We use the array that content the text to display it
    mainDescription.textContent = contentArray[imageSliderIndice - 1][0];
    dateDescription.textContent = contentArray[imageSliderIndice - 1][1];
    titleSlider.textContent = contentArray[imageSliderIndice - 1][2];

}