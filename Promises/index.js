//1. Crear una Promesa que resuelva ( resolve() )con el nombre de ustedes.
//2. Crear una Promesa que resuelva con el nombre de ustedes luego de 5 
// segundos (usar setTimeout)

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('My name is Joaquin'), 5000);
})

myPromise
    .then(result => console.log(result))
    .catch(error => console.log('Error'))
    .finally(() => console.log('Myname Promise End'));


//  3. Crear una funcion esNumeroPar que reciba un numero, verifique 
// si es par o no, y retorne una promesa,
// la promesa debe resolver con true o false segun la verificacion. 

//4. A la funcion anterior, modificarla para que la promesa se rechaze
// ( reject() ) con el error: 'Valor Invalido' si el valor enviado por
//  parametro no es un numero.

const isPair = ((num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isNaN(num) && num % 2 == 0)
                return resolve(true)
            else
                return reject(false)
        }, 5000);

    })
})


isPair(2)
    .then(result => console.log(result))
    .catch(error => console.log('Invalid Value'))
    .finally(() => console.log("IsPair Function End"));

//5. Crear un arreglo de 10 objetos productos, con la forma 
// {nombre, precio, estaVendido }, crear una funcion 
// filtrarPorPrecio que reciba un precio (numero) y 
// retorne una promesa, la promesa debe filtrar el 
// arreglo de productos y crear uno nuevo con los 
// productos cuyos precios sean iguales o menores 
// que el numero recibido, la promesa debe resolver,
// luego de 5 segundos, con el arreglo de productos 
// filtrados. En este ejercicio usar async/await al 
// momento de consumir la funcion

const products = [{
        name: "bike",
        price: 500,
        sold: true,
    },

    {
        name: 'pc',
        price: 400,
        sold: true,
    },
    {
        name: 'car wheel',
        price: 250,
        sold: false,
    },
    {
        name: 'iphone charger',
        price: 125,
        sold: false,
    },
    {
        name: 'boca juniors shirt',
        price: 250,
        sold: true,
    },
    {
        name: 'lakers cap',
        price: 70,
        sold: true,
    },
    {
        name: 'sunglasses',
        price: 125,
        sold: true,
    },
    {
        name: 'book',
        price: 100,
        sold: false,
    },
    {
        name: 'headphones',
        price: 175,
        sold: true,
    },
    {
        name: 'skate board',
        price: 150,
        sold: false,
    }
];


const filterPrice = async(number) => {
    const promiseFilter = new Promise((resolve, reject) => {
        setTimeout(() => {
            const filteredArray = products.filter(({ price }) => {
                return price <= number;
            })
            resolve(filteredArray);

        }, 5000)
    });
    let filter = await promiseFilter;

    if (filter.length === 0)
        console.log("No matches found");

    return filter;


}

filterPrice(2)
    .then((filter) => console.log(filter))
    .finally(() => console.log("FilterPrice Function End"));