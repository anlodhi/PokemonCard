import React,{useState} from 'react';
import './style.css';
import axios from 'axios';


function Card() {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemon, setPokemon] = useState({});
    const [pokemonChosen, setPokemonChosen] = useState(false);

    const searchPokemon = () =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res)=> {console.log(res.data);
        setPokemon(
            {   name: pokemonName,
                species: res.data.species.name,
                img: res.data.sprites.front_default,
                ability: res.data.abilities[0].ability.name,
                hp: res.data.stats[0].base_stat,
                attack: res.data.stats[1].base_stat,
                defense: res.data.stats[2].base_stat,
                "special attack": res.data.stats[3].base_stat,
                speed: res.data.stats[5].base_stat,
                type: res.data.types[0].type.name,
            })},()=>{alert("please enter a valid pokemon name")});
            setPokemonChosen(true);
    }
    
    
  return <div>
        <div className='app'>
            <div className="title">
                <h1>Pokemon Stats</h1>
                <input type="text" onChange={(event) => setPokemonName(event.target.value)}/>
                <button onClick={searchPokemon}>Search Pokemon</button>
            </div>
        </div>
        {!pokemonChosen? <h1 className='displaytext'>Please Choose a Pokemon</h1>:<div className="pokemoncard-container">
              <h2 className="lev2head">Pokemon Card</h2>
              <div className="pokemoncard">
                <div className="pokemoncard-header">
                  <h2>{pokemon.species}</h2>
                  <img src={pokemon.img} alt="" width="200px" height="200px"/>
                  <h1>Type: {pokemon.type}</h1>  
                </div>
                <div className="pokemoncard-body">
                <h3>Ability: {pokemon.ability}</h3>  
                  <div className='stat'>
                      <p className='hp'>Hp: {pokemon.hp}</p>
                      <p className='attack'>Attack: {pokemon.attack}</p>
                      <p className='defense'>Defense: {pokemon.hp}</p>
                      <p className= 'special-attack'>Special Attack: {pokemon["special attack"]}</p>
                      <p className='speed'>Speed: {pokemon.speed}</p>
                  </div>
                </div>
              </div>
            </div>}
       
  </div>;
}

export default Card;
