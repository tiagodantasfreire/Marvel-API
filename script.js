const timeStamp = '1620532580'
const apiKey = '4f62d75bb3df89776d80b488bf4fa301'
const baseURL = 'http://gateway.marvel.com/v1/public'
const paramsURL = `ts=${timeStamp}&apikey=${apiKey}&hash=3d32d70db524951f9ef0a9bdac0a73da`
const slider = document.querySelector('#slider');

const avengers = [
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Spider-Man",
    "Black Widow",
    "Black Panther",
    "Vision",
    "Thanos",
    "Hawkeye",
    "Falcon",
    "War Machine (Iron Man 3 - The Official Game)",
    "Scarlet Witch",
    "Ant-Man (Scott Lang)",
    "Wasp",
    "Star-Lord (Peter Quill)",
    "Nebula",
    "Groot",
    "Doctor Strange",
    "Bucky",
    "Captain Marvel (Carol Danvers)",
    "Valkyrie (Ultimate)",
    "Wong",
    "Mantis",
    "Rocket Raccoon",
    "Drax",
    "Gamora",
    "Pepper Potts",
]

avengers.map(hero => {
  fetch(`${baseURL}/characters?${paramsURL}&name=${hero}`).then(response => {
      return response.json();
    }).then((heros) => {
      console.log(heros.data.results[0].name);
      hero = heros.data.results[0];

      const heroImg = `${hero.thumbnail.path}/portrait_xlarge.${hero.thumbnail.extension}`
     //  const heroImg = './img_test'

      slider.innerHTML += `
        <div class="hero">
          <img src=${heroImg} alt=${hero.name} />
          <p>${hero.name}</p>
        </div>
      `
    });
});


// SLIDER
const nextEl = document.querySelector('#next');
const previousEl = document.querySelector('#previous');
const sliderEl = document.querySelector('#slider');
const imgWidth = sliderEl.offsetWidth;

nextEl.addEventListener('click', onNextClick);
previousEl.addEventListener('click', onPreviousClick);

function onNextClick() {
  const imgWidth = 690;
  sliderEl.scrollLeft += imgWidth;
}

function onPreviousClick() {
  const imgWidth = 690;
  sliderEl.scrollLeft -= imgWidth;
}