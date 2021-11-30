// var usuario = prompt("Ingrese su nombre");
const usuario = "Extraño"
var examenActual = 0;
var puntaje = 0;

let preguntasTotal = [
    {
        //Pregunta 1
        pregunta: `¿Que significa "www" en una url? (En ingles!)`,
        a: 'WeWeWe',
        b: 'World Wide Web',
        c: 'Wonderful web workstation', 
        correct: 'b'
    }, 
    {
        //Pregunta 2
        pregunta: `¿Cuanto mide una piscina Olimpica? (En metros)`,
        a: '50m',
        b: '75m',
        c: '125m', 
        correct: 'a'
    },
    {
        //Pregunta 3
        pregunta: `¿Cual es el nombre de la mayor empresa de Tecnologia en Corea del sur?`,
        a: 'Samsung',
        b: 'Xiaomi',
        c: 'LG', 
        correct: 'a'
    },
    {
        ////Pregunta 4
        pregunta: `¿Qué signo de puntuación termina una oración imperativa?`,
        a: 'Un punto',
        b: 'Un signo de interrogacion',
        c: 'Ambas son correctas', 
        correct: 'c'
    },
    {
        //Pregunta 5
        pregunta: `¿Qué animal se puede ver en el logo de Porsche?`,
        a: 'Perro',
        b: 'Caballo',
        c: 'Lobo', 
        correct: 'b'
    },
    {
        //Pregunta 6
        pregunta: `¿Cómo se llama el océano más grande de la tierra?`,
        a: 'Oceano Atlantico',
        b: 'Oceano Pacifico',
        c: 'Oceano Indico', 
        correct: 'b'
    },
    {
        //Pregunta 7
        pregunta: `¿Qué país inventó el helado?`,
        a: 'Estados Unidos',
        b: 'Belgica',
        c: 'China', 
        correct: 'c'
    },
    {
        //Pregunta 8
        pregunta: `¿Quién creó Sherlock Holmes?`,
        a: 'Arthus Conan Doyle',
        b: 'Edgar Allan Poe',
        c: 'Agatha Christie', 
        correct: 'a'
    },
    {
        //Pregunta 9
        pregunta: `¿Qué miembro de los Beatles se casó con Yoko Ono?`,
        a: 'John Lennon',
        b: 'Ringo Star',
        c: 'Paul McCartney', 
        correct: 'a'
    },
    {
        //Pregunta 10
        pregunta: `¿Qué país ganó la primera Copa del Mundo de fútbol en 1930?`,
        a: 'Argentina',
        b: 'Uruguay',
        c: 'Alemania', 
        correct: 'b'
    },
    {
        //Pregunta 11
        pregunta: `¿Cuál es el continente más grande de la Tierra?`,
        a: 'Asia',
        b: 'America',
        c: 'Antartida', 
        correct: 'a'
    },
    {
        //Pregunta 12
        pregunta: `¿Qué país limita con 14 naciones y cruza 8 zonas horarias?`,
        a: 'Rusia',
        b: 'Andorra',
        c: 'Alemania', 
        correct: 'a'
    },
    {
        //Pregunta 13
        pregunta: `¿La Habana es la capital de qué país?`,
        a: 'Belice',
        b: 'Cuba',
        c: 'El Salvador', 
        correct: 'b'
    },
    {
        //Pregunta 14
        pregunta: `¿Qué país tiene los lagos más naturales?`,
        a: 'Argentina',
        b: 'Rusia',
        c: 'Canada', 
        correct: 'c'
    },
    {
        //Pregunta 15
        pregunta: `¿En qué país encontraría el lago Bled?`,
        a: 'Estonia',
        b: 'Argelia',
        c: 'Rumania', 
        correct: 'a'
    },
    {
        //Pregunta 16
        pregunta: `¿Cuántos corazones tiene un pulpo?`,
        a: '2',
        b: '3',
        c: '5', 
        correct: 'b'
    },
    {
        //Pregunta 17
        pregunta: `¿Cuántas patas tiene una araña?`,
        a: '8',
        b: '6',
        c: '10', 
        correct: 'a'
    },
    {
        //Pregunta 18
        pregunta: `¿Cuál es el planeta más caliente del sistema solar?`,
        a: 'Venus',
        b: 'Jupiter',
        c: 'Mercurio', 
        correct: 'a'
    },
    {
        //Pregunta 19
        pregunta: `¿Cuál es el planeta más cercano al sol?`,
        a: 'Jupiter',
        b: 'Mercurio',
        c: 'Saturno', 
        correct: 'b'
    },
    {
        //Pregunta 20
        pregunta: `¿Es Plutón un planeta?`,
        a: 'Si',
        b: 'No',
        c: 'Depende', 
        correct: 'a'
    },
    {
        //Pregunta 21
        pregunta: `¿Cuántos dientes tiene un ser humano adulto?`,
        a: '30',
        b: '28',
        c: '32', 
        correct: 'c'
    },
    {
        //Pregunta 22
        pregunta: `¿Cuando se estreno la serie "The Walking Dead"?`,
        a: '17/10/2009',
        b: '31/10/2010',
        c: '15/9/2015', 
        correct: 'b'
    },
    {
        //Pregunta 23
        pregunta: `¿Cómo se llama el villano principal de la primer pelicula de Spiderman?`,
        a: 'Duende verde',
        b: 'Doctor Octopus',
        c: 'Electro', 
        correct: 'a'
    },
    {
        //Pregunta 24
        pregunta: `¿En los libros de qué autora se basa la serie Outlander?`,
        a: 'Stephen King',
        b: 'J.K Rowling',
        c: 'Dianna Gabaldon', 
        correct: 'c'
    },
    {
        //Pregunta 25
        pregunta: `De que trata la serie Gambito de dama`,
        a: 'Ajedrez',
        b: 'Poker',
        c: 'Basquet', 
        correct: 'a'
    },
    {
        //Pregunta 26
        pregunta: `¿Que pais tiene posee mas islas?`,
        a: 'Canada',
        b: 'Rusia',
        c: 'Suecia', 
        correct: 'c'
    },
    {
        //Pregunta 27
        pregunta: `¿Cuál es la capital de Canadá?`,
        a: 'Quebec',
        b: 'Toronto',
        c: 'Ottawa', 
        correct: 'c'
    },
    {
        //Pregunta 28
        pregunta: `¿Cuál es el río más largo del mundo?`,
        a: 'La caniada',
        b: 'Rio Nilo',
        c: 'Rio Amazonas', 
        correct: 'b'
    },
    {
        //Pregunta 29
        pregunta: `¿Cuál es la serie de libros mejor vendida del siglo 21?`,
        a: 'Harry potter',
        b: 'Los juegos del hambre',
        c: 'El senior de los anillos', 
        correct: 'a'
    },
    {
        //Pregunta 30
        pregunta: `¿De qué ciudad son originarios los Beatles? `,
        a: 'Manchester',
        b: 'Liverpool',
        c: 'New york', 
        correct: 'b'
    },
];


//Mezclo las preguntas
preguntasTotal = preguntasTotal.sort(() => Math.random() - 0.5);
//console.log(preguntasTotal);



//Divido esa mezcla 
let diezPreguntas = preguntasTotal.splice(0,(preguntasTotal.length/3));
//console.log(diezPreguntas);


var preguntaElement = document.getElementById('pregunta')
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var submitBtn = document.getElementById('submit');
var cuestionario = document.getElementById("cuestionario");
var respuestaElements = document.querySelectorAll(".respuesta");
//const preguntaElement = document.getElementById("pregunta");


cargarPreguntas();

// Carga de pregunta y las respuestas
function cargarPreguntas(){
    noSeleccionar();
    const examenActualData = diezPreguntas[examenActual];

    preguntaElement.innerText = examenActualData.pregunta;
    a_text.innerText = examenActualData.a;
    b_text.innerText = examenActualData.b;
    c_text.innerText = examenActualData.c;
}

function opcionEscogida() {
    let respuesta = undefined;


    respuestaElements.forEach((respuestaElement) => {
        if(respuestaElement.checked){
            respuesta = respuestaElement.id;
        }
    });

    return respuesta;
}

// Deseleccionar la respuesta anterior
function noSeleccionar(){
    respuestaElements.forEach((respuestaElement) =>{
        respuestaElement.checked = false;
    });
}

//Boton
submitBtn.addEventListener("click", () => {
    
    const respuesta = opcionEscogida();

    if (respuesta) {
        if (respuesta === diezPreguntas[examenActual].correct) {
            puntaje++;
        }

        examenActual++;
        if (examenActual < diezPreguntas.length) {
            cargarPreguntas();
        } else {
            console.log(usuario+`, obtuviste ` + puntaje + ` puntos`);



            
            cuestionario.innerHTML = 
            `
                <h2>Hola ${usuario}, respondiste ${puntaje}/${diezPreguntas.length} preguntas. </br> Obtuviste ${puntaje} puntos.</h2>
                
                <button class="btn2 btn btn-primary" onclick="location.reload()">Volver a realizar</buttonasd>
            `;
        }
    }
});



// function enviaDatos(dato) { 
//     var javascriptVariable = dato;
//     window.location.href = "archivo.php?name=" + javascriptVariable; 
//   }

// enviaDatos(puntaje);


// enviarDatos("dato1=item 1&dato2=item 2&dato3=item3")
