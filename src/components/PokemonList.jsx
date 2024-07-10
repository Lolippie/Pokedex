import styled from 'styled-components'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PokemonType from './TypeStyle';

const AffichageCardPokemon = styled.div`
    display: flex;
    width: 500px;
    background: wheat;
    padding: 10px;
    border-radius: 30px;
    justify-content: flex-start;
    margin : 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    
`;
const AffichageInfoPokemon = styled.div `
    display : grid;
    background-color: rgb(221, 187, 143);
    padding-right : 250px;
    padding-bottom : 100px;
    border-radius: 30px;
    
    flex-direction: row;
    position: absolute;
    left : 125px;
    justify-content: flex-start;
    font-size:large;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ImagePokemon = styled.img `
background-color: aliceblue;
padding-right : 0px;
border-radius: 80px;
`;

const IdPokemon = styled.p `
font-weight: bold;
position: absolute;
top : 35px;
left : 15px;`;

const NomPokemon = styled.p `    
position: absolute;
left : 90px;
top : 35px;`;

const TypesPokemon = styled.div`
display : flex ;
flex-wrap: wrap;
position: absolute;
flex-direction: column ;
margin : 10px;
left : 400px;
`

export default function PokemonList({listPokemon}){
    const [listInfosPokemon, setListInfosPokemon] = useState([]);

    useEffect(()=>{
        
        const fetchData = async() => {
            let updatedListInfosPokemon = [];
            await Promise.all(
                listPokemon?.map( async(pokemon) => {
                    
                    let rep = await fetch(pokemon?.url);
                    if(!rep.ok){
                        throw new Error('Erreur dans la recuperation des données d\'un pokemon');
                    }
                    let poke = await rep?.json();
                    let image = poke?.sprites?.front_default;
                    let id = poke?.id;
                    let nom = poke?.name ;
                    let types = poke?.types; 
                    updatedListInfosPokemon = [...updatedListInfosPokemon,{id,nom,types,image}];
                }))
                updatedListInfosPokemon.sort((a,b)=> {
                    return a?.id - b?.id;
                });
            setListInfosPokemon(updatedListInfosPokemon);
        };
        fetchData()
        },[listPokemon]); 


    return (
  
        <div> {listInfosPokemon?.map((element)=>
            <div key={element?.id} >
                <Link to = {`/pokemon/${element?.nom}`}>
                <AffichageCardPokemon >   
                    <div  >
                        <ImagePokemon src={element?.image} alt={`${element?.nom}` }></ImagePokemon>
                    </div>
                    <AffichageInfoPokemon  >
                        <IdPokemon> #{element?.id} </IdPokemon>
                        <NomPokemon > {element?.nom} </NomPokemon>
                    </AffichageInfoPokemon>
                    <TypesPokemon>
                        {
                            element?.types.map((typePokemon) => {
                            const nomTyp = typePokemon?.type?.name;
                            return (<PokemonType key={typePokemon?.slot} type={nomTyp}> {nomTyp} </PokemonType>);
                            })
                        }
                    </TypesPokemon>
                </AffichageCardPokemon>
                </Link>
            </div>
        )}
        </div>    
 



    )

}