
/** declaro variables **/
let nameS = "";
let edad = 0;


/* valido que las dos condiciones se cumplan y se rompan con break */
while (true) {
    /** pido el nombre al usuario */
    nameS = prompt("Ingresa el nombre");

    /** valido que el campo no este vacio */
    if (nameS === null || nameS.trim() === "") {
        alert("Ingresa un nombre válido");
        continue;
    }

    edad = Number(prompt("Ingresa la edad"));

    if (isNaN(edad) || edad <= 0) {
        alert("Ingresa una edad válida");
        continue;
    }
    break;
}


/** confirmo si es mayor de edad */
if (edad >= 18) {
    alert(`Hola ${nameS}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
} else {
    alert(`Hola ${nameS}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
}
