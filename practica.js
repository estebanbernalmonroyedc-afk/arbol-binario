//debe devolver la cantidad de bits y byte
//debe devolver la palabra o frase ingresado en binario 

function conversorBinario(palabra){

    const byte = new TextEncoder().encode(palabra)
    let = binario = ""

    for (i = 0; i < byte.length;i++){
        binario += byte[i].toString(2).padStart(8 , "0") + ""
    }

    const cantidadBytes = byte.length; 
    const cantidadBits = cantidadBytes *8;

    return {
        textoOriginal : palabra,
        binario : binario.trim(),
        bytes: cantidadBytes,
        bits: cantidadBits
    };

}

console.log (conversorBinario ("la hora pa"));