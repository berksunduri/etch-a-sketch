const container = document.querySelector('#container');
const button = document.querySelector('#button-grid');

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(squaresPerSide) {
    container.innerHTML = ''; 
    const squareSize = 960 / squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        const innerSquare = document.createElement('div');
        innerSquare.classList.add('inner-square');
        innerSquare.style.backgroundColor = getRandomColor();
        innerSquare.style.opacity = 0; 

        square.appendChild(innerSquare);
        
        square.addEventListener('mouseover', () => {
            let currentOpacity = parseFloat(innerSquare.style.opacity);
            console.log("Out");
            if (currentOpacity < 1) {
                innerSquare.style.opacity = currentOpacity + 0.1;
                console.log("In");
            }
        });

        container.appendChild(square);
    }
}

button.addEventListener('click', () => {
    let squaresPerSide = prompt('Enter the number of squares per side:', 16);
    squaresPerSide = Math.min(Math.max(parseInt(squaresPerSide), 1), 100);
    if (!isNaN(squaresPerSide)) {
        createGrid(squaresPerSide);
    } else {
        alert('Invalid input.');
    }
});


createGrid(16);
