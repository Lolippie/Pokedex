import {useLoaderData} from 'react-router-dom';
import { pokemonLoader } from './pokemonLoader';
import PokemonCard from '../../components/PokemonCard';
import styled from 'styled-components';
import VersionInfo from '../../components/VersionInfo';
// implementer pour ne faire que la premiere version, a changer plus tard pour grp de version
// ici donnée initialement comme grp version red-blue et version red
// A definir comme une liste plus tard ? 

export default function PokemonPage(){
    const poke = useLoaderData();
    const versionGrp = {
            grp: "red-blue",
            id:1
        };
    const infosPokemon ={
        talents : poke.abilities,
        cris : poke.cries,
        exp_base : poke.base_experience,
        id : poke.id,
        attaques : poke.moves,
        nom : poke.name,
        images : poke.sprites,
        types : poke.types,
        poids : poke.weight,
        taille : poke.height,
        stats_basique : poke.stats,
    }
    return (
        <div> 
            <div>
                <PokemonCard 
                image= {infosPokemon?.images} 
                nom= {infosPokemon?.nom}
                types= {infosPokemon?.types}
                poids={infosPokemon?.poids}
                taille = {infosPokemon?.taille}
                cris={infosPokemon?.cris}
                talents={infosPokemon?.talents}
                />  
            </div>
            <div>
                <VersionInfo 
                    attaques={infosPokemon?.attaques}
                    versionGrp= {versionGrp}
                />
            </div>

        </div>


    );
}