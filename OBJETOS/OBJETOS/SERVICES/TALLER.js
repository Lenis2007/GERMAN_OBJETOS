export function TALLER() {

    // 1. Cree un objeto donde se almacenen los productos de un supermercado con su respectivo precio. Los productos son: 
    // Papa, Arroz, Lentejas, Aceite. Luego imprima cada uno de los precios almacenados en el objeto anterior con su respectivo producto.

    function EJ1() {
        let objeto = { "Papa": 2000, "Arroz": 3000, "Lentejas": 4000, "Aceite": 5000 };
        for (let clave in objeto) {
            console.log("clave", clave);
            console.log("valor", objeto[clave]);
        }
    }
    EJ1()

    // 2. Cree un objeto vacío, p.e. let objeto = {} y agregue tres pares clave-valor. Imprima todo el objeto para verificar que se han agregado las nuevos pares clave-valor.
    function EJ2() {
        let objeto = {};
        objeto[0] = 0
        objeto[1] = 1
        objeto[2] = 2
        console.log(objeto);
    }
    EJ2()

    // 3. Dado el objeto {password: "admin30905", rol: "admin", edad: 20} cambie el valor de la clave password por "user_7833", el valor de la clave rol por "user", el valor de la clave edad por 34. Imprima todo el objeto para verificar los cambios.
    function EJ3() {
        let objeto = { password: "admin30905", rol: "admin", edad: 20 };
        objeto.password = "user_7833";
        objeto.rol = "user";
        objeto.edad = 34;
        console.log(objeto);
    }
    EJ3()

    // 4. Dado el objeto {"dos": 2, "cinco": 5, "siete": 7, "cuarenta": 40, "cincuenta": 50} recorrer el objeto y mostrar cuáles de los valores son pares.
    function EJ4() {
        let objeto = { "dos": 2, "cinco": 5, "siete": 7, "cuarenta": 40, "cincuenta": 50 };
        for (let clave in objeto) {
            if (objeto[clave] % 2 === 0) {
                console.log(objeto[clave]);
            }
        }
    }
    EJ4()

    // 5. Dado el siguiente objeto { 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552: "inhabilitado", 438276: "habilitado" } recorrer el objeto y mostrar cuántos usuarios están habilitados.
    function EJ5() {
        let objeto = { 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552: "inhabilitado", 438276: "habilitado" };
        let contador = 0;
        for (let clave in objeto) {
            if (objeto[clave] == "habilitado") {
                contador++;
            }
        }
        console.log(`Hay ${contador} habilitados`);
    }
    EJ5()

    // 6. Dado el siguiente objeto { numeros: [45, 78, 22, 89, 8] } recorrer el valor de la clave números.
    function EJ6() {
        let objeto = { numeros: [45, 78, 22, 89, 8] };
        let numeros = objeto.numeros
        numeros.forEach(i => {
            console.log(i);
        })
    }
    EJ6()

    // 7. Dado el objeto { 3: "tres", 60: "sesenta", 10: "diez" } eliminar la clave valor 60-"sesenta". Imprima todo el objeto para verificar los cambios.
    function EJ7() {
        let objeto = { 3: "tres", 60: "sesenta", 10: "diez" };
        delete objeto[60];
        console.log(objeto);
    }
    EJ7()

    // 8.  Dado el objeto {162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
    // 4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
    // 786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
    function EJ8() {
        let objeto = {162544: {nombres: "Pepe", apellidos: "Perez", edad: 40}, 4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31}, 786353: {nombres: "Raul", apellidos: "Castro", edad: 80}};
        for (let clave in objeto) {
            for (let clave2 in objeto) {
                console.log(objeto[clave][clave2]);
            }
        }
    }
    EJ8()
}
