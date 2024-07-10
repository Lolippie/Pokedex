import styled from 'styled-components';
import PokemonType from './TypeStyle'

const CartePokemon = styled.div`
    margin-top : 2%;
    margin-left : 38%;
    margin-right : 38%;
    display: block;
    background: wheat;
    border-collapse: collapse;
    border-radius: 20px; /* Ajoute une bordure arrondie */
    overflow: hidden; /* Masque le dépassement des bordures arrondies */
    border: 2px solid transparent; /* Assure que le bord est visible */
    box-shadow: 4px 4px 4px BurlyWood;
    `
const ImgType = styled.div`
    display : block;
    margin-top : 40px;
    justify-content: center;
    align-items: center;
    text-align :center;
    column-span : all;
`
const ImgDispo = styled.div`
    display: flex;
    justify-content: center; /* Centrer horizontalement */
    align-items: center; /* Centrer verticalement */

`

const Image = styled.img`
transform: scale(2);

`

const NomPokemon = styled.div`
text-align: center;
font-weight: bolder;
font-size: 1.2rem;
`

const TypePokemon = styled.div`
    display : flex;
    flex-direction : row ;
    justify-content : center;   
    margin-top: 50px;
`

const TitreInfosPokemon = styled.div`
    display : block;
    text-align :center;
    width:30%;
    font-weight: bolder;
    background-color : LightCoral ;
    `
const InfosPokemon = styled.div`
    display : block;
    width:70%;
    background-color : PeachPuff  ;
`
const LigneInfosPokemon = styled.div`
    display : flex;
    flex-direction : row;    
    justify-content: flex-start;
    border: 2px solid black;
    border-radius : 4px;
    `
const TailleAudio = styled.audio`
    height :20px;
    width : 200px;
    margin-top : 1%;
    margin-left: 4%;

`
function PokemonCard({image,  nom, types, taille, poids, cris, talents}){
    return (
        <CartePokemon>
                <NomPokemon> 
                    {nom} 
                </NomPokemon>
            <div>
                <ImgType>
                    
                        <ImgDispo>
                            <Image src={image?.front_default}/>
                        </ImgDispo>
                        <TypePokemon>
                            {
                                types.map((typePokemon) => {
                                    const nomTyp = typePokemon?.type?.name;
                                    return (<PokemonType type = {nomTyp} key={typePokemon?.slot}> {nomTyp} </PokemonType>);
                                })
                            }
                        </TypePokemon>
                </ImgType>
                <div>
                    <LigneInfosPokemon>
                        <TitreInfosPokemon>
                            Infos 
                        </TitreInfosPokemon>
                        <InfosPokemon>
                            <span>
                                Poids : {poids} 
                            </span>
                            <span>
                                Taille : {taille}
                            </span>
                        </InfosPokemon>
                    </LigneInfosPokemon>

                    <LigneInfosPokemon>
                        <TitreInfosPokemon>
                            Cri
                        </TitreInfosPokemon>
                        <InfosPokemon>
                            <TailleAudio controls>
                                <source src={cris[Object.keys(cris)[0]]}  type="audio/ogg"/>
                            </TailleAudio> 
                        </InfosPokemon>
                    </LigneInfosPokemon>
                    
                    {
                        talents?.map((talent, index) =>{
                            return (
                                <LigneInfosPokemon key={index}>

                                    <TitreInfosPokemon>
                                        Talent  
                                        {
                                        (talent?.is_hidden)&& " caché"
                                        } 
                                    </TitreInfosPokemon>
                                    <InfosPokemon>
                                        {talent?.ability?.name}
                                    </InfosPokemon>
                                </LigneInfosPokemon>
                            );
                        })
                    }

                </div>
               

            </div>

        </CartePokemon>
    )
}
export default PokemonCard;
