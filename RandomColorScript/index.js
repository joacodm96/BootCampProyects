const changeElement = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    document.body.style.background = '#' + randomColor;
    colorId.innerHTML = '#' + randomColor;
}

document.addEventListener('click', changeElement, true);