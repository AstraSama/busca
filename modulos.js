const GERAR = (array, tamanho) => {
    for(let i = 0; i < tamanho; i++) {
        let saida = 0;
        let aux_gerar;
        aux_gerar = Math.floor((Math.random() * (tamanho * 10))) + 1;
        do {
            if(array.includes(aux_gerar)) {
                aux_gerar = Math.floor((Math.random() * (tamanho * 10))) + 1;

            } else {
                array[i] = aux_gerar;
                saida = 1;
            }
        } while(!saida);

    }

    return array;
}

const ORDENAR = (data) => {
    let aux;

    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data.length; j++) {
            if(i != j) {
                if(data[i] < data[j]) {
                    aux = data[i];
                    data[i] = data[j];
                    data[j] = aux;

                }
            }
        }
    }

    return data;
}

const BUSCAR = (array, numero) => {
    let aux_array = [];
    let saida = 0;
    let contador = 0;

    for(let i = 0; i < array.length; i++) {
        aux_array[i] = array[i];

    }

    do {
        if(aux_array.length % 2 == 0) {
            if(numero == aux_array[(aux_array.length / 2) - 1] || numero == aux_array[(aux_array.length / 2)]) {

                return console.log("Encontrado\nComparou ", contador, " vezes.");
            } else if(numero < aux_array[(aux_array.length / 2) - 1]) {
                aux_array.splice(aux_array.length / 2, aux_array.length / 2);
                contador++;
                

            } else if(numero > aux_array[(aux_array.length / 2) - 1]) {
                aux_array.splice(0, (aux_array.length / 2) -1);
                contador++;

            }

        }else if(aux_array.length == 1 && aux_array[aux_array.length - 1] != numero) {
            saida = 1;

        } else {
            if(numero == aux_array[Math.floor(aux_array.length / 2)]) {

                return console.log("Encontrado\nComparou ", contador, " vezes");
            } else if(numero < aux_array[Math.floor(aux_array.length / 2)]) {
                aux_array.splice(Math.floor(aux_array.length / 2), Math.floor((aux_array.length / 2)) + 1);
                contador++;

            } else if(numero > aux_array[Math.floor(aux_array.length / 2)]) {
                aux_array.splice(0, Math.floor(aux_array.length / 2));
                contador++;

            }
        }
    } while(!saida);

    return console.log("não está");
}

module.exports = {
    GERAR,
    ORDENAR,
    BUSCAR
}

