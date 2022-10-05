//Variable y condicional NOMBRE
let nombre = prompt ("Cual es tu nombre?");

    if (nombre == "Carol") {
        alert("Que bello! Tambien es mi nombre!");
    }
    else{
        alert("Que lindo nombre!");
    }

//Ciclo 
for (let i=1;i<=2;i++){
    edad = prompt("Que edad tienes?");

    if (edad < 18){
        console.log("Es menor de edad");
        continue;
    }

    if (edad > 18){
        console.log("Es mayor de edad");
        continue;
    }

    else {
        alert("Por favor ingrese su edad");
    }
}



//Variable y condicional GENERO
let genero = prompt("Bienvenide "+nombre+" , por favor cuentanos, cual es el genero con el que te identificas.");

    if(genero == "Mujer" || genero == "mujer" || genero == "Femenino" || genero == "femenino"){
        console.log("Es femenino");
    }

    else if(genero == "Hombre" || genero == "hombre" || genero == "Masculino" || genero == "masculino"){
        console.log("Es masculino");
    }
    else{
        console.log("Es no binario");
    }


//FUNCION
function decide(genero ="Mujer" || genero == "mujer" || genero == "Femenino" || genero == "femenino"){
    document.write("No puede opinar sobre el aborto si no es en su propio cuerpo")
}

function decide(genero = "Hombre" || genero == "hombre" || genero == "Masculino" || genero == "masculino"){
    document.write("No puede opinar sobre el aborto si no tiene la capacidad de gestar")
}


decide(genero);






