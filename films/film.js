function parseFilmQuery(){
    
    //allows us to index the query parameters of a call to our API endpoint
    const sp = new URLSearchParams(window.location.search);

    //getting the parameter from the URL associated with ?id=...
    const id = sp.get('id');
    return id;
}

async function querySWAPI(){

    //get query param for film id from client's URL
    const id = parseFilmQuery()

    //attempts to query the SWAPI endpoint
    try{
        const response = await fetch(`http://localhost:9001/api/films/${id}`)
        if (!response.ok) {
            throw new Error(`HTTP Error! status: ${response.status}`);
        }
        //collecting the JSON response
        const data = await response.json();
        console.log(data)

    } catch (error){
        console.error('There was a problem with the fetch operation: ', error);
    }
}

querySWAPI()
     


