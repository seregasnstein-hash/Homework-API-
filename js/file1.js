let imgContainer = document.querySelector(".img_container");
let textContainer = document.querySelector(".text_container");
let loader = document.querySelector('.loader');


fetch("https://api.nasa.gov/planetary/apod?api_key=JGdq0YZYLrnty8uUHqZFTSHurcOYs7qu13d4MytL")
  .then((response) => response.json())
  .then((data) => {
    loader.style.display = 'none';
    console.log(data);
    imgContainer.innerHTML = `<img src="${data.url}" alt="">`;
    textContainer.innerText = data.explanation;
  })
