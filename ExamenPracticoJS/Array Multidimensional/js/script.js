
 // Array multidimensional
 var libros = [
    ['La Galatea', '-Miguel de Cervantes-', 'Clásicos', 'lagalatea.jpg'],
    ['EL Quijote', '-Miguel de Cervantes-', 'Clásicos', 'quijote.jpg'],
    ['2001', '-Clarke-', 'Ciencia Ficción', '2001.jpg'],
    ['Imperiofobia', '-Roca-', 'Historia', 'imperio.png'],
    ['Cita con Rama', '-Clarke-', 'Ciencia Ficción', 'rama.jpg'],
    ['El fin de la infancia', '-Clarke-', 'Ciencia Ficción', 'infancia.jpg'],
    ['El arbol de la ciencia', '-Baroja-', 'Clásicos', 'arbol.jpg'],
];

 // Función que imprime datos en pantalla
function lanzarEnPantalla() {
    var i = document.getElementById("miValor").value;
    var miTexto = "<ul>";

    miTexto += "<li><img src='img/" + libros[i][3] + "'><h2>" + libros[i][0] + " " + libros[i][1] +
        "</h2> <p class='" + libros[i][2] + "'>Género: " + libros[i][2] + "</p></li>";
    miTexto += "</ul>"
    document.getElementById('demo').innerHTML = miTexto;
}

 // Función vuelta a estado inicial
function cerrar() {
    document.getElementById('demo').innerHTML = "";
}