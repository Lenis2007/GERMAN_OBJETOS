export function OBJETO() {

    /* CREAR UN OBJETO */
    
    // CLAVE : "1:"
    // VALOR : "uno"
    /* let digito = {1: "uno", dos: "dos"}; */
    
    // CLAVE : "numeros:"
    // VALOR : arreglo.
    /* let digitos = {numeros: [1, 2, 3, 4, 5, 6, 7]}  */
    
    
    
    /* ACCEDER A UN VALOR */
    // FORMA 1:
    let objeto = {1: "uno", dos: 2, tres: "tres"};
    
    console.log(objeto.dos);
    
    console.log(objeto.tres);
    
    // FORMA 2:
    let objeto1 = {1: 2, dos: 2};
    
    console.log(objeto1["dos"]);
    
    console.log(objeto1[1]);
    
    
    
    /* ASIGNACIÓN */
    let objeto2 = {1: "uno", dos: "dos"};
    
    objeto.dos = '3';
    
    objeto2[3] = '1';
    
    console.log(objeto2);
    
    
    
    /* ELIMINACIÓN */
    let objeto3 = {2: "nombre", uno: "uno"};
    
    delete objeto3[2];
    
    delete objeto3.uno;
    
    
    
    /* RECORRIDO */
    let objeto4 = {1: "uno", dos: "dos"};
    for (let clave in objeto4) {
        console.log("clave", clave);
        console.log("valor", objeto4[clave]);
    }
}