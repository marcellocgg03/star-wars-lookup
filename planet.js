let planetNameH1;
let diameterSpan;
let climateSpan;
let populationSpan;
let charactersUl;
let filmsUl;

const baseUrl = `http://localhost:9001/api`;

// Runs on page load
addEventListener('DOMContentLoaded', () => {
  planetNameH1 = document.querySelector('h1#planetName');
  diameterSpan = document.querySelector('span#diameter');
  climateSpan = document.querySelector('span#climate');
  populationSpan = document.querySelector('span#population');
  charactersUl = document.querySelector('#characters ul');
  filmsUl = document.querySelector('#films ul');

  const sp = new URLSearchParams(window.location.search);
  const id = sp.get('id');
  getPlanet(id);
});

async function getPlanet(id) {
  let planet;
  try {
    planet = await fetchPlanet(id);
    planet.characters = await fetchCharacters(id);
    planet.films = await fetchFilms(id);
  } catch (ex) {
    console.error(`Error reading planet ${id} data.`, ex.message);
  }
  renderPlanet(planet);
}

async function fetchPlanet(id) {
  const url = `${baseUrl}/planets/${id}`;
  const res = await fetch(url);
  return await res.json();
}

async function fetchCharacters(id) {
  const url = `${baseUrl}/planets/${id}/characters`;
  const res = await fetch(url);
  return await res.json();
}

async function fetchFilms(id) {
  const url = `${baseUrl}/planets/${id}/films`;
  const res = await fetch(url);
  return await res.json();
}

function renderPlanet(planet) {
  document.title = `SWAPI - ${planet?.name}`;
  planetNameH1.textContent = planet?.name;
  diameterSpan.textContent = planet?.diameter;
  climateSpan.textContent = planet?.climate;
  populationSpan.textContent = planet?.population;

  const characterLis = planet?.characters?.map(character =>
    `<li><a href="/character.html?id=${character.id}">${character.name}</a></li>`
  );
  charactersUl.innerHTML = characterLis?.join("") || "<li>No characters found.</li>";

  const filmLis = planet?.films?.map(film =>
    `<li><a href="/film.html?id=${film.id}">${film.title}</a></li>`
  );
  filmsUl.innerHTML = filmLis?.join("") || "<li>No films found.</li>";
}
