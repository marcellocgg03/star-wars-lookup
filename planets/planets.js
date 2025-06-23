document.addEventListener('DOMContentLoaded', getPlanet);

async function getPlanet() {
    const sp = new URLSearchParams(window.location.search);
    const id = sp.get('id');
    const url = `http://localhost:9001/api/planets/${id}`;
    try {
        const planet = await fetch(url).then(res => res.json());
        renderPlanet(planet);
    } catch (ex) {
        console.error("Error fetching planet.", ex.message);
    }
}

const renderPlanet = planet => {
    document.querySelector('#planetName').textContent = planet.name;
    const details = document.querySelector('#planetDetails');
    details.innerHTML = `
        <p>Climate: ${planet.climate}</p>
        <p>Terrain: ${planet.terrain}</p>
        <p>Population: ${planet.population}</p>
        <p>Diameter: ${planet.diameter}</p>
        <p>Rotation Period: ${planet.rotation_period}</p>
        <p>Orbital Period: ${planet.orbital_period}</p>
        <p>Gravity: ${planet.gravity}</p>
        <p>Surface Water: ${planet.surface_water}</p>
    `;
}
