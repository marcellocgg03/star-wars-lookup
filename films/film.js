function parseFilmQuery(){
    
    //allows us to index the query parameters of a call to our API endpoint
    const sp = new URLSearchParams(window.location.search);

    //getting the parameter from the URL associated with ?id=...
    const id = sp.get('id');
    return id;
}


