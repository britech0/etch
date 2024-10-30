const parent = document.querySelector('.parent');
const child = document.querySelector('.cell');
const button = document.querySelector('.button');
const clear = document.querySelector('.clear');

let isMouseDown = false;

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add('cell');
            cell.textContent = "";

            const cellSize = 100 / size;
            cell.style.width = `${cellSize}%`
            cell.style.height = `${cellSize}%`
            cell.style.opacity = 0.2

            cell.addEventListener("mousedown", function (e)  {
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                isMouseDown = true;
                e.target.style.background = "#" + randomColor;
                increaseOpacity(e.target);
        });

            cell.addEventListener("mousemove", function (e) {
                if (isMouseDown) {
                    var randomColor = Math.floor(Math.random()*16777215).toString(16);
                    e.target.style.background = "#" + randomColor;
                    increaseOpacity(e.target);
                }
            });

            parent.appendChild(cell);
        }
    }
}


button.addEventListener("click", function (e) {
    parent.innerHTML = "";
    let ask = prompt("How many squares do you want? (<=64)");
    let num = Math.floor(parseInt(ask))
    if (num > 64) {
        num = 64
    }
    makeGrid(num)
})

clear.addEventListener("click", function (e) {
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.style.background = '';
        cell.style.opacity = 0.2;
    });
});

function increaseOpacity (element) {
    let currentOpacity = parseFloat(element.style.opacity);
    if (currentOpacity < 1) {
        element.style.opacity = currentOpacity + 0.1;
    }

}