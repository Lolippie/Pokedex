import {useState, useEffect } from 'react'
import PokemonList from '../components/PokemonList'
import styled from 'styled-components';


export default function PokedexPage(){
    const [pokemons, setListPokemons] = useState([]);
    

    useEffect(()=>{
        const getPokemons = async() =>{
            const rep = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
            if(!rep.ok){
                throw new Error ("Erreur au niveau du fetch des pokemons");
            }
             const data = await rep?.json();
             return data?.results;
        };

        const fetchData= async() => {
            const pokemonData = await getPokemons();

            setListPokemons(pokemonData);

        };
        fetchData();
    }, []);

    return (
        <div>
            <PokemonList listPokemon={pokemons}/>
        </div>
    );
}