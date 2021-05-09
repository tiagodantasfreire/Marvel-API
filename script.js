const timeStamp = '1620532580'
const apiKey = '4f62d75bb3df89776d80b488bf4fa301'

fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=3d32d70db524951f9ef0a9bdac0a73da`)
.then(response => {
  return response.json();
}).then((json) => {
  console.log(json.data.results);
  const heros = json.data.results;

  const container = document.querySelector('#container');

  const heroName = heros.map(hero => {
    const heroImg = `${hero.thumbnail.path}/standard_xlarge.${hero.thumbnail.extension}`
    container.innerHTML += 
    `
    <div class="hero">
      <p>${hero.name}</p>
      <img src=${heroImg} />
    </div>
    `
  })
});

