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
/*const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}]

   const alumns.forEach(alumns =>
    if (T1 = true && T2 = true || T2 = true && T3 = true){alumns.isApproved=true}
    else {alumns.isApproved=false})
    
//EJERCICIO PENDIENTE*/

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

/*EJERCICIOS DE LOOPS
Iteración 5: Probando for*/

/*---------------------------------------------------------------------------------------------------------------------------------------------------
Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:
const placesToTravel2 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'},{id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
----------------------------------------------------------------------------------------------------------------------------------------------------*/

const placesToTravel2 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'},{id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
const placesToTravel3 = [];


for (let i=0; i<placesToTravel2.length; i++){
    const placeNameToTravel = placesToTravel2[i]
    if (placeNameToTravel.id !== 11 && placeNameToTravel.id !== 40){placesToTravel3.push(placeNameToTravel)}}
;
console.log(placesToTravel3);

/*EJERCICIOS DE LOOPS
Iteración 6: Mixed for...of e includes*/

/*---------------------------------------------------------------------------------------------------------------------------------------------------
Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:
const toys = [
{id: 5, name: 'Buzz MyYear'}, 
{id: 11, name: 'Action Woman'}, 
{id: 23, name: 'Barbie Man'}, 
{id: 40, name: 'El gato con Guantes'},
{id: 40, name: 'El gato felix'}
]
----------------------------------------------------------------------------------------------------------------------------------------------------*/
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

const newListOfToys = []
for (const toy of toys)
if (!toy.name.includes("gato")) newListOfToys.push(toy)

console.log(newListOfToys)


/*EJERCICIOS DE LOOPS
Iteración 7: For...of avanzado*/

/*---------------------------------------------------------------------------------------------------------------------------------------------------
Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:
const popularToys = [];
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]
----------------------------------------------------------------------------------------------------------------------------------------------------*/

const popularToys = [];
const toys2 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
];

for (const toy of toys2)
if (toy.sellCount>15) popularToys.push(toy)

console.log(popularToys);
