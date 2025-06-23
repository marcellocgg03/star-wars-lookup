function parseQuery(){
    
    //allows us to index the query parameters of a call to our API endpoint
    const sp = new URLSearchParams(window.location.search);

    //getting the parameter from the URL associated with ?id=...
    const id = sp.get('id');
    return id;
}

async function querySWAPI(){

    //get query param for  id from client's URL
    const id = parseQuery()
    let data 
    //attempts to query the SWAPI endpoint
    try{
        const response = await fetch(`http://localhost:9001/api/films/${id}/characters`)    
        data = await response.json()
        renderCharacters(data)
        
    } catch (error){
        console.error('There was a problem with the fetch operation: ', error);
    }
    
}

const charactersList = document.querySelector("#charactersList")

const renderCharacters = characters => {
    const divs = characters.map(character => {
      const el = document.createElement('div');
      el.addEventListener('click', () => goToCharacterPage(character.id));
      el.textContent = character.name;
      return el;
    })
    charactersList.replaceChildren(...divs)
  }

querySWAPI()

const goToCharacterPage = id => window.location = `/character.html?id=${id}`


  