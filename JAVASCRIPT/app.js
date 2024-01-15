/*EJERCICIOS DE LOOPS
Iteración 1: Usa includes*/

/*---------------------------------------------------------------------------------------------------------------------------------------------------
Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
----------------------------------------------------------------------------------------------------------------------------------------------------*/

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

const findCamiseta=(array) => {
    let emptyArrayCamiseta = [];
    for (let i=0; i<array.length; i++) 
    {if (array[i].includes("Camiseta"))
    emptyArrayCamiseta.push(array[i])
}
return emptyArrayCamiseta
}

const arrayCamiseta = findCamiseta(products);
console.log("🚀 ~ arrayCamiseta:", arrayCamiseta);
