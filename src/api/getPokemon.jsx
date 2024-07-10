export async function getPokemon(name){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!res.ok){
        throw new Error ("La recuperation du pokemon a un probleme");
    }

    const data = await res.json();
    return data;
}