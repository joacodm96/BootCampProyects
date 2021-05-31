// Api constants
const accessKey = 'SBCseTLufnrMEU4P3Jrv-YfT9tT7ofADu0OS6nDCXKI';
const api = 'https://api.unsplash.com';

//Gino's code
// Global state
/* let allowRequest = true;
let page = 1; */

// Elements
/* const gallery = document.getElementById('gallery');

const renderImage = (photo) => {
    const newImage = document.createElement('img');
    newImage.className = 'imagen';
    newImage.src = photo.urls.regular;
    gallery.appendChild(newImage);
} */

/* const fetchImages = () => {
    if (allowRequest) {
        // Bloqueamos la request para que no siga pidiendo datos 
        // si el usuario sigue scrolleando mientra esperamos la respuesta:
        allowRequest = false;

        // Pedimos los datos
        fetch(`${api}/photos?client_id=${accessKey}&page=${page}&per_page=30`)
            .then(response => response.json())
            .then(data => {
                // Siguiente página:
                page++;

                // Ya obtuvimos respuesta, desbloqueamos la request:
                allowRequest = true;

                // Renderizamos cada imagen:
                data.forEach(element => {
                    renderImage(element);
                });
            })
            .catch(e => console.log(e));
    }
} */

/* const scrolled = (e) => {
    const myDiv = document.getElementById('gallery');
    if (myDiv.offsetHeight + myDiv.scrollTop + 100 >= myDiv.scrollHeight) {
        fetchImages();
    }
}

gallery.addEventListener('scroll', scrolled); */

// First page
//fetchImages();

const search = async(query, page) => {
    const response = await fetch(`${api}/search/photos/?query=${query}&page=${page}&client_id=${accessKey}`) // response es lo que nos traiga la api
    const data = await response.json() // la respuesta se guarda en data
    return data // se retorna data
}

const buttonElement = document.getElementById('search-btn') // sincronizando variales con los elementos (boton de busqueda)
const nextPageElement = document.getElementById('next-page-btn') // sincronizando variables con elementos html (boton de proxima pagina)

let searchedValue = ""
let actualPage = 0 // se inicializa en 0, despues dentro de la funcion se actualiza a 1

buttonElement.addEventListener('click', async() => {
    const inputElement = document.getElementById('query-input')
    const inputValue = inputElement.value // constante donde se guarda el valor del input
    const searchedImages = await search(inputValue, 1)
    const imagesContainerElement = document.getElementById('images-container')
    imagesContainerElement.innerHTML = ""; //limpia el dom por si se cambia la busqueda
    searchedImages.results.forEach((imageData) => { // un forEach para cada resultado encontrado
        const image = document.createElement("img");
        image.className = 'image-item' // creo la clase image-item, para despues aplicar css
        image.src = imageData.urls.regular
        imagesContainerElement.appendChild(image);
    })

    searchedValue = inputValue // antes estaba en vacio ahora es el valor del input
    actualPage = 1 // antes estaba en 0 ahora se vuelve 1 (pagina actual)
});


nextPageElement.addEventListener('click', async() => { // en caso de clickear en proxima pagina
    actualPage++; // el numero de la pagina aumenta ++
    const searchedImages = await search(searchedValue, actualPage) //se aloja en la constante la busqueda y la pagina anterior
    const imagesContainerElement = document.getElementById('images-container') // se alojan las proximas imagenes
    searchedImages.results.forEach((imageData) => { // se ejecuta un forEach igual al de la funcion previa
        const image = document.createElement("img");
        image.className = 'image-item'
        image.src = imageData.urls.regular
        imagesContainerElement.appendChild(image);
    })
});