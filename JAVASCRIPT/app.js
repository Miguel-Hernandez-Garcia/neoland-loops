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

/*EJERCICIOS DE LOOPS
Iteración 2: Condicionales avanzados*/

/*---------------------------------------------------------------------------------------------------------------------------------------------------
Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log.
Puedes usar este array para probar tu función:
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
----------------------------------------------------------------------------------------------------------------------------------------------------*/
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}]

const twoQuartersApproved=(array) => {
    for (let i=0; i<array.length; i++) {
       if ((array[i])[1] += (array[i])[2] == true) 
       {array[i].isApproved=true}
       else if ((array[i])[2] += (array[i])[3] == true ) 
       {array[i].isApproved=true}
       else {array[i].isApproved=false}
    }
    return array
}

const resultTwoQuartersApproved = twoQuartersApproved(alumns);
console.log("🚀 ~ resultTwoQuartersApproved:", resultTwoQuartersApproved);


//EJERCICIO PENDIENTE

/*EJERCICIOS DE LOOPS
Iteración 3: Probando for...of*/

/*---------------------------------------------------------------------------------------------------------------------------------------------------
Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.
Puedes usar este array:
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
----------------------------------------------------------------------------------------------------------------------------------------------------*/

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for (placesToTravel[0] of placesToTravel) 
{console.log(placesToTravel[0]);}

/*EJERCICIOS DE LOOPS
Iteración 4: Probando for...in*/

/*---------------------------------------------------------------------------------------------------------------------------------------------------
Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
----------------------------------------------------------------------------------------------------------------------------------------------------*/

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (let key in alien) 
{console.log(`Alien tiene la clave ${key} con valor ${alien[key]}`);}