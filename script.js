/*Paso A Paso (Parte 1)*/
let colors = generateRandomColors(6)
//["rgb(255, 195, 18)", "rgb(196, 229, 56)", "rgb(18, 203, 196)", "rgb(0, 148, 50)", "rgb(27, 20, 100)", "rgb(131, 52, 113)"]


let cuadrados = document.querySelectorAll(".square")
let body = document.querySelector("body");
let bodyColor = body.style.backgroundColor = "darkgreen"
let h1 = document.querySelector("h1");
let buttonReset = document.getElementById("reset");
let botonEasy = document.getElementById("easyButton");
let botonHard = document.getElementById("hardButton");
let numberOfSquares = 0;


/*Paso 2 color a los cuadros*/
for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = colors[i];
    /* parte de paso 4*/


    cuadrados[i].addEventListener("click", function () {
        clickedColor = cuadrados[i].style.backgroundColor;

        if (clickedColor === pickedColor) {
            message.innerHTML = "<h3>¡Correcto!</h3>";

            // BOTONES
            buttonReset.textContent = "Jugar de Nuevo";
            changeColors(pickedColor);

        } else if (clickedColor !== pickedColor) {
            cuadrados[i].style.backgroundColor = `${bodyColor}`;
            message.innerHTML = `<h3>"Intentalo Nuevamente"</h3>`;

            //BOTONES
            buttonReset.textContent = "Nuevos Colores";
        }
    })

}

/*Paso A Paso (Parte 2)*/
/*Paso 3 */
let pickedColor = colors[pickColor()];
let colorGanador = document.querySelector("#colorDisplay");
colorGanador.textContent = `${pickedColor}`

/*paso 4*/

let message = document.querySelector("#message");
let clickedColor;

function changeColors(pickedColor) {
    h1.style.backgroundColor = pickedColor;
    for (let i = 0; i < colors.length; i++) {
        //cuadrados[i].style.backgroundColor = h1.style.backgroundColor
        cuadrados[i].style.backgroundColor = pickedColor;
    }
    return h1.style.backgroundColor
}

function pickColor() {
    let numAleatorio = (Math.floor(Math.random() * (colors.length)));
    return numAleatorio;
}

/*function randomColor() {
    colorAleatorio = Math.floor(Math.random() * 255)
    return colorAleatorio
}*/

/*function randomColor() {
    let colorAleatorio = [];
    if (colorAleatorio.length < 3) {
         colorAleatorio.push((`${Math.floor(Math.random() * 255)} `), (`${Math.floor(Math.random() * 255)} `), (`${Math.floor(Math.random() * 255)}`));
    }
    return colorAleatorio
}*/
function randomColor() {
    let colorAleatorio = [];
    if (colorAleatorio.length < 3) {
        colorAleatorio.push(`${Math.floor(Math.random() * 256)}`, ` ${Math.floor(Math.random() * 256)}`, ` ${Math.floor(Math.random() * 256)}`);
    }
    return colorAleatorio;
}
function generateRandomColors(num) {
    console.log('generateRandomColors num: ', num);
    let colores = [];
    /*
    if (num === 6) {
        colores.push(`rgb(${randomColor()})`, `rgb(${randomColor()})`, `rgb(${randomColor()})`, `rgb(${randomColor()})`, `rgb(${randomColor()})`, `rgb(${randomColor()})`);
    } else if(num === 3) {
        colores.push(`rgb(${randomColor()})`, `rgb(${randomColor()})`, `rgb(${randomColor()})`);
    }
    */

    /*
    if (num === 6) {
        [`rgb(${randomColor()})`, `rgb(${randomColor()})`, `rgb(${randomColor()})`, `rgb(${randomColor()})`, `rgb(${randomColor()})`, `rgb(${randomColor()})`]
    }

    return [`rgb(${randomColor()})`, `rgb(${randomColor()})`, `rgb(${randomColor()})`];
    */

    for (let index = 0; index < num; index++) {
        colores.push(`rgb(${randomColor()})`)
    }

    return colores
}



/*function generateRandomColors(num) {
    let colores = [];
    if(colores.length <= num) {
        colores.push(`rgb(${randomColor()})`, `rgb(${randomColor()})`, `rgb(${randomColor()})`, `rgb(${randomColor()})`, `rgb(${randomColor()})`, `rgb(${randomColor()})`);
    }
    return colores
}*/

/*BOTONES */


/*function reset() {
    buttonReset.addEventListener("click", function() {
        
        for (let i = 0; i < cuadrados.length; i++) {
            cuadrados[i].style.backgroundColor = colors[i];
        }
        
        generateRandomColors(6);
        changeColors(pickedColor);
        pickedColor = colors[pickColor()];
        colorGanador.textContent = `${pickedColor}`;
        
    })
    return
}*/


//Esto esta funcionando
/*buttonReset.addEventListener("click", function reset(){
    colors = generateRandomColors(6);
    pickedColor = colors[pickColor()];
    h1.style.backgroundColor = bodyColor;

    for (let j = 0; j < cuadrados.length; j++) {
        cuadrados[j].style.backgroundColor = colors[j];
        colorGanador.textContent = `${pickedColor}`;
    }
    return
})*/

/*buttonReset.addEventListener("change", function() {
    if (clickedColor === pickedColor) {
        buttonReset.textContent = "Jugar de Nuevo";
        
    } else if(clickedColor !== pickedColor) {
            buttonReset.textContent = "Nuevos Colores";
            message.innerHTML = ` `;
    }
    return
})*/

/*message.addEventListener("change", function() {
    if (clickedColor === pickedColor) {
        buttonReset.textContent = "Jugar de Nuevo";
        
    } else if(clickedColor !== pickedColor) {
            buttonReset.textContent = "Nuevos Colores";
            message.innerHTML = ` `;
    }
    return
})*/

buttonReset.addEventListener("click", function reset() {
    colors = generateRandomColors(6);
    pickedColor = colors[pickColor()];
    message.textContent = "";
    h1.style.backgroundColor = bodyColor;

    for (let j = 0; j < cuadrados.length; j++) {
        cuadrados[j].style.backgroundColor = colors[j];
        colorGanador.textContent = `${pickedColor}`;
    }

    return
})

// BOTON HARD


/*botonHard.addEventListener("click", function () {
    botonHard.classList.add("selected");
    botonEasy.classList.remove("selected");
    if (color[i] === undefined) {
        colors = generateRandomColors(6);
    }
    
})*/

botonHard.addEventListener("click", function () {
    botonEasy.classList.remove("selected");
    botonHard.classList.add("selected");
    h1.style.backgroundColor = bodyColor;
    numberOfSquares = 6;

    colors = generateRandomColors(numberOfSquares);
    pickedColor = colors[pickColor()];
    colorGanador.textContent = `${pickedColor}`;
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.display = "block";
        cuadrados[i].style.backgroundColor = colors[i];

    }



})

// BOTON EASY

/*botonEasy.addEventListener("click", function () {
    botonEasy.classList.add("selected");
    botonHard.classList.remove("selected");

    colors = generateRandomColors(3);
    if (cuadrados.length > 3) {
        cuadrados[i].style.display = "none";
    }
})*/


botonEasy.addEventListener("click", function () {
    botonEasy.classList.add("selected");
    botonHard.classList.remove("selected");
    //h1.style.backgroundColor = bodyColor;
    numberOfSquares = 3;

    colors = generateRandomColors(numberOfSquares);
    //cuadrados[i].style.backgroundColor = colors[i];
    pickedColor = colors[pickColor()];
    colorGanador.textContent = `${pickedColor}`;

    for (let i = 0; i < cuadrados.length; i++) {

        if (i < 3) {
            cuadrados[i].style.display = "none";
        } else {
            cuadrados[i].style.backgroundColor = colors[i];
        }
    }
    console.log();
})


                // BUG EN EL JUEGO



