import {getPokemon} from "../../api/getPokemon" 
export async function pokemonLoader(props) {
    const name = props?.params?.id;
    if (!name){
        throw new Error ("Le nom n'a pas été trouvé");
    }
    const pokemon = await getPokemon(name);
    return pokemon;
}