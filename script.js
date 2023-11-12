//Horizontal Drag For Latest Events

const eventsCardWrap = document.querySelector(".events-card-wrap");
const eventsCards = document.querySelector(".events-cards");

let isPressed = false;
let cursorXSpace;

eventsCardWrap.addEventListener("mousedown", (e) => {
    isPressed = true;
    cursorXSpace = e.clientX - eventsCards.offsetLeft;
    eventsCardWrap.style.cursor = "grabbing";
})

window.addEventListener("mouseup", () => {
    eventsCardWrap.style.cursor = "auto";
    isPressed = false;
})

eventsCardWrap.addEventListener("mousemove", (e) => {
    if(!isPressed) return;
    eventsCards.style.left = `${e.clientX - cursorXSpace}px`;
    boundCards();
})

function boundCards() {
    const eventsCardWrap_rect = eventsCardWrap.getBoundingClientRect();
    const eventsCards_rect = eventsCards.getBoundingClientRect();

    if(parseInt(eventsCards.style.left) > 0){
        eventsCards.style.left = 0;
    }else if(eventsCards_rect.right < eventsCardWrap_rect.right ){
        eventsCards.style.left =`${eventsCardWrap_rect.width - eventsCards_rect.width}px`;
    }
}

//Popup Windows

const closeButton = document.querySelectorAll(".close");
const body = document.querySelector("body");

Array.from(closeButton).forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelector(".open").classList.remove("open");
        body.classList.remove("no-scroll");
    })
})

function openWindow(name) {
    document.querySelector(name).classList.add("open");
    body.classList.add("no-scroll");
}


//Submit Prevent

const submitButton = document.querySelectorAll("button[type='submit']");

Array.from(submitButton).forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
    })
})

