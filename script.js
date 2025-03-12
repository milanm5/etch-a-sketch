const container = document.querySelector(".container");
document.querySelector(".square-button").addEventListener("click", howManyBoxes);
createBoxes();

function howManyBoxes() {

    let numberOfBoxes;
    
    do {
        numberOfBoxes = Number(prompt("How many squares per side do you want?"));
    } while (!Number.isInteger(numberOfBoxes) || numberOfBoxes > 100)

    removeBoxes();
    createBoxes(numberOfBoxes)
}

function createBoxes(numOfBoxes = 16) {

    let dimensions = 100 / numOfBoxes + "%"; 
    numOfBoxes = Math.pow(numOfBoxes, 2);

    for (let i = 0; i < numOfBoxes; i++) {

        // random rgb color
        let r = Math.floor(Math.random() * 255) + 1;
        let g = Math.floor(Math.random() * 255) + 1;
        let b = Math.floor(Math.random() * 255) + 1;

        let box = document.createElement("div");
        box.style.outline = "1px solid black";
        box.style.width = dimensions;
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
        })
        container.appendChild(box);
    }
}

function removeBoxes() {

    while (container.hasChildNodes()) {
        let lastChild = container.lastChild;
        container.removeChild(lastChild);
    }    

}