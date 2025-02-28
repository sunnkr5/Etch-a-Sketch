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





        





