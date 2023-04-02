let canvas = document.getElementById('canvas');

const ctx = canvas.getContext("2d");

const count = 8;

const width = canvas.clientWidth;
const height = canvas.clientHeight;

const sizeSquare = width / count;


function draw() {

    

    console.log(sizeSquare);
    let delit = (num) => num % 2 == 0;


    for (let i = 0; i < count; i++) {

        for (let j = 0; j < count; j++) {

            const x = j * sizeSquare;
            const y = i * sizeSquare;

            const xChet = delit(j);
            const yChet = delit(i);

            let isEven = xChet == yChet;

            let color = isEven ? "rgb(0, 0, 200)" : "rgb(170, 101, 101)";

            ctx.fillStyle = color;
            ctx.fillRect(x, y, sizeSquare, sizeSquare);
            ctx.stroke();
        }
    }

    let xKlet = +prompt('Введите X клетки');
    let yKlet = +prompt('Введите Y клетки');

    horse(xKlet, yKlet);

}

draw();

function horse(i = 1, j = 1) {

    let base_image = new Image();
    base_image.src = 'horse.png';

    let kunSize = 50;
    console.log(kunSize);

    const dx = j < 1 ? 1 : j > 8 ? 8 : j;
    const dy = i < 1 ? 1 : i > 8 ? 8 : i;

    let kunX = (dx) * sizeSquare - (kunSize / 2) - sizeSquare / 2;
    let kunY = (dy) * sizeSquare - (kunSize / 2) - sizeSquare / 2;

    base_image.onload = function () {
        ctx.drawImage(base_image, kunX, kunY);
    }
}