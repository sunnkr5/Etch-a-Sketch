const container = document.querySelector("#container");


function setGrid(squareNos) {
    let s1 = squareNos * squareNos;
    let hw = (480 - (squareNos * 10)) / squareNos;
    for (let index = 0; index < s1; index++) {
        const content = document.createElement("div");
        content.setAttribute("style", "background: orange; margin: 5px");
        content.style.width = hw + 'px';
        content.style.height = hw + 'px';
        container.appendChild(content);
        
        content.addEventListener("mouseenter", () => {
            content.style.background = "green";
        })
    }
}
console.log(setGrid(16));


const button = document.querySelector("button");

button.addEventListener("click", () => {
    let userInput = prompt("Enter a number between 1 and 100");

    // If the user clicks "Cancel" (userInput will be null)
    if (userInput === null) {
        alert("Action canceled! No changes were made.");
        return; // Exit the function early if the user clicked cancel
    }

    // If the user input is empty (""), display a message
    if (userInput.trim() === "") {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    // Convert user input to a number
    let num = Number(userInput);

    // Check if input is a valid number
    if (isNaN(num)) {
        alert("Wrong Input! Enter only numbers.");
    } else if (num < 1 || num > 100) {
        alert("Wrong Input! Enter a number between 1 and 100.");
    } else {
        container.innerHTML = ''; // Clear existing grid
        setGrid(num); // Create new grid with user input
    }
});



        





