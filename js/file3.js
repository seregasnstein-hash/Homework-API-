let gallery = document.querySelector('.gallery');


async function getData() {
  try {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();

    for (let i = 0; i < 5; i++) {

      let randomNum = Math.floor(Math.random() * data.length);

      let url = data[randomNum].download_url;
      
      let img = document.createElement('img');
      img.src = url;
      img.alt = "random photo";

      gallery.append(img);
      data.splice(randomNum, 1);

    }
  } catch (error) {
    console.error(error);
  }
}

getData();
