import React from 'react'




function Body() {

const [characters, setCharacters] = React.useState([])
    async function fetchAPI(){
        let resp = await fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=dca8b8458987e3f55369ebff7783b057&hash=817339985e4d2ac5d495987f2d3ebe4c')
        
        let json = await resp.json();
        setCharacters(json.data.results);
    }

    function renderCharacter(character){
    return <div><p>{character.name}</p><img src={character.thumbnail.path}/></div>
    }

    return (
        <div>
            <div>

                <button onClick={fetchAPI} >click me</button>
        
            </div>
            <div>
                {characters.map(character => renderCharacter(character))}
            </div>
        </div>

        
    );
}

export default Body

