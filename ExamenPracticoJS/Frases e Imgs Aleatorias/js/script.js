

//Array de frases

var frases = [
    "La libertad, Sancho, es uno de los más preciosos dones...",
    "En un lugar de la Mancha...",
    "Solo piel y huesos fue...",
    "Adarga antigua y galgo corredor...",
    "They might be giants...",
    "Come poco y cena más poco, Sancho...",
    "El edificio de la salud se fragua en la oficina del estómago..."
];
//----------------------------------------


//funcion lanzar frase

function lanzarFrase() {

    var numAleat = Math.random() * (frases.length);
    var numFrase = Math.floor(numAleat);

    document.getElementById("cita").innerHTML = frases[numFrase];
}
//----------------------------------------


//funcion lanzar color del body

function lanzarColor() {

    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background = bgColor;
}
//-------------------------------------------


//funcion tamaño fuente (tamFont)

function tamFont() {
    document.getElementById("cita").style.fontSize = Math.floor((Math.random() * 30) + 10) + "px";
}
//-------------------------------------------


//funcion cargar imagen

function cargaimagen() {

    var imagenes = [
        'don.jpg',
        'don2.jpg',
        'don3.jpg',
        'cerv2.jpg',
        'cerv3.jpg'
    ];

    var numAleat = Math.random() * (imagenes.length);
    var numFoto = Math.floor(numAleat);

    document.getElementById('imagen').src = "img/" + imagenes[numFoto];
}
//-------------------------------------------


//funcion cambiar color al h2

function fraseColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var citaColor = "rgb(" + x + "," + y + "," + z + ")";

    document.getElementById("cita").style.color = citaColor;

}
//-------------------------------------------


//funcion disparar todas las funciones

function todas() {
    lanzarFrase();
    lanzarColor();
    cargaimagen();
    tamFont();
    fraseColor();
}
//-------------------------------------------


//Ejecución de todas las funciones antes de "onclick"
todas();

//-------------------------------------------