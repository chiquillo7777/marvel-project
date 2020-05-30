import React, { useState, useEffect } from 'react';

function Body() {

    const [characters, setCharacters] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        fetchAPI();
        console.count("SE RENDERIZO")
    }, []);

    useEffect(() => {
        console.count("Se actualizo el counter");
    }, [counter, characters]);

    useEffect(() => {
        return () => {
            console.log('El componente se ha desmontado!');
        }
    }, [])


    async function fetchAPI() {
        try {
            let resp = await fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=dca8b8458987e3f55369ebff7783b057&hash=817339985e4d2ac5d495987f2d3ebe4c')
            let json = await resp.json();
            setCharacters(json.data.results);
            throw new Error('Aqui ha pasado algo');
        } catch (error) {
            console.error(error)
        }
    }

    function renderCharacter(character) {
        return <div key={character.id}><p>{character.name}</p><img src={character.thumbnail.path} /></div>
    }

    return (
        <div>
            <div>

                <button onClick={() => setCounter((prevState) => prevState + 1)}>Counter {counter}</button>

            </div>
            <div>
                {characters.map(renderCharacter)}
            </div>
        </div>


    );
}

export default Body


