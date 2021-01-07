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
// if the window is under 768px of width, we add the event listener 
// attached to the displayBurgerMenu function
if (window.innerWidth < 768)
    burger.addEventListener("click", displayBurgerMenu);

window.addEventListener("resize", () => {
    if (window.innerWidth < 768)
        burger.addEventListener("click", displayBurgerMenu);
    else
        burger.removeEventListener("click", displayBurgerMenu);
});


// Event listener to listen the slider buttons 
for (let i = 0; i < slideButtons.length; i++) {
    slideButtons[i].addEventListener("click", slideContent);
}

// Add or remove "close" class from the burger
function displayBurgerMenu() {
    burger.classList.toggle("close");
}

// Swaps the image of the slider
function slideContent() {
    imageSlider.classList.remove("image" + imageSliderIndice);
    // if we click the previous button, we decrease the imageSliderIndice
    if (this == previousButton) {
        imageSliderIndice--;
        // if it goes under 1, we set it to 3
        if (imageSliderIndice < 1) {
            imageSliderIndice = 3;
        }

    }
    // if we click the next button, we increase the imageSliderIndice
    else {
        imageSliderIndice++;
        // if it goes exceeds 3, we set it to 1
        if (imageSliderIndice > 3) {
            imageSliderIndice = 1;
        }
    }
    // We use imageSliderIndice to display the right image class
    imageSlider.classList.add("image" + imageSliderIndice);

    // We use the array that content the text to display it
    mainDescription.textContent = contentArray[imageSliderIndice - 1][0];
    dateDescription.textContent = contentArray[imageSliderIndice - 1][1];
    titleSlider.textContent = contentArray[imageSliderIndice - 1][2];

}