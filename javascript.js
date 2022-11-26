const body = document.querySelector("#body");
const button = document.querySelector("#BTN");

let height = 16;
function MakeGrid(height) {
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    body.appendChild(container);
    for (let x = 0; x < height; x++) {
        let x = document.createElement("div")
        x.classList.add("GridContainer")
        container.appendChild(x);
        for (let y = 0; y < height; y++) {
            let y = document.createElement("div");
            y.classList.add("GridDiv");
            x.appendChild(y);
        }
    }
}

MakeGrid(height);

button.addEventListener("click", () => {
    height = prompt("how big should the grid be?");
    while (height > 64) {
        alert("max height is 64 squares");
        height = prompt("input a correct height!")
    }
    container = document.querySelector("#container")
    container.remove();
    MakeGrid(height);
})

function gridBlack() {
    let container = document.querySelector("#container");
    gridContainer = container.childNodes;
    gridContainer.forEach((Index) => {
        gridDiv = Index.childNodes;

        gridDiv.forEach((currentIndex) => {
            currentIndex.addEventListener("mouseenter", () => {
                currentIndex.style.backgroundColor = "black";
            })
        })
    })
}

BlackButton = document.querySelector("#BlackButton")
BlackButton.addEventListener("click", () => {
    gridBlack()
})

Clear = document.querySelector("#Clear")
Clear.addEventListener("click", () => {
    let container = document.querySelector("#container")
    container.remove();
    MakeGrid(height);
})

RainbowButton = document.querySelector("#RainbowButton");
RainbowButton.addEventListener("click", () => {
    gridRainbow()
})

function gridRainbow() {
    let container = document.querySelector("#container");
    gridContainer = container.childNodes;
    gridContainer.forEach((Index) => {
        gridDiv = Index.childNodes;
        gridDiv.forEach((currentIndex) => {
            currentIndex.addEventListener("mouseenter", () => {
                currentIndex.style.backgroundColor = RGB();
            })
        })
    })
}

function RandomRGB() {
    return (Math.random() * 255);
}

function RGB() {
    return ("rgb(" + RandomRGB() + ", " + RandomRGB() + ", " + RandomRGB() + ")");
}