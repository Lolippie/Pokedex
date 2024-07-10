import { Link } from "react-router-dom"
import styled from "styled-components";

const PokedexRetourRouge = styled.div`
    display: flex;
    background: red;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 4px;

`
const PokedexRetourBlanc = styled.div`
    display : block;
    background : white;
    witdh : 100%;
    height : 100%;

`

const Retour = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
`
export default function Header(){
    return (
        <PokedexRetourRouge> 
            <Retour to="/"> 
                <PokedexRetourBlanc/>
            </Retour>
        </PokedexRetourRouge> 
    );
}