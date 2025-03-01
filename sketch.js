const container = document.querySelector("#container");


function setGrid(squareNos) {
    let s1 = squareNos * squareNos;
    let hw = (960 - (squareNos * 10)) / squareNos;
    for (let index = 0; index < s1; index++) {
        const content = document.createElement("div");
        content.classList.add('content-grids');
        content.style.width = hw + 'px';
        content.style.height = hw + 'px';
        container.appendChild(content);
        
        content.addEventListener("mouseenter", () => {
            content.style.background = "green";
        });
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


const randomColourGrid = document.querySelector('.random-colour');


randomColourGrid.addEventListener("click", () => {

    
    
    
    function randomRGB() {
        const r = Math.floor(Math.random() * 256); // Red: 0-255
        const g = Math.floor(Math.random() * 256); // Green: 0-255
        const b = Math.floor(Math.random() * 256); // Blue: 0-255
      
        return `rgb(${r}, ${g}, ${b})`;
      }
      
      console.log(randomRGB());
      
      function randomColourGrid(squareNos) {
        let s1 = squareNos * squareNos;
        let hw = (960 - (squareNos * 10)) / squareNos;
        for (let index = 0; index < s1; index++) {
            const content = document.createElement("div");
            content.classList.add('content-grids');
            content.style.width = hw + 'px';
            content.style.height = hw + 'px';
            container.appendChild(content);
            
            content.addEventListener("mouseenter", () => {
                content.style.background = randomRGB();
            });
        }
    }
    let userInput = prompt("Enter a number between 1 and 100");
    container.innerHTML = '';
    console.log(randomColourGrid(userInput));
});

const reset = document.querySelector('.reset');
reset.addEventListener("click", () => {
    container.innerHTML = '';
    setGrid(16);
});
        
const darkening = document.querySelector('#darkening');


darkening.addEventListener("click", () => {

    function whiteGrid(squareNos) {
        let s1 = squareNos * squareNos;
        let hw = (960 - (squareNos * 10)) / squareNos;

        // Create the grid of squares
        for (let index = 0; index < s1; index++) {
            const content = document.createElement("div");
            content.classList.add('white-grids');
            content.style.width = hw + 'px';
            content.style.height = hw + 'px';
            container.appendChild(content);

            // Initialize darkening level for each square
            let darkeningLevel = 0;

            // Add event listener for mouse enter on each grid square
            content.addEventListener("mouseenter", () => {

                // Darken the square
                if (darkeningLevel < 10) {
                    darkeningLevel++;
                    const newColor = 255 - (darkeningLevel * 25); // Darkens by 25 per level (10 levels = fully black)
                    content.style.backgroundColor = `rgb(0, ${newColor}, 0)`;
                }
            });
        }
    }

    // Clear previous grid if any
    container.innerHTML = '';

    // Generate a grid of 16x16 squares
    whiteGrid(16);
});




