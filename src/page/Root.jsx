import Header from '../components/Header'
import {Outlet} from 'react-router-dom'
import styled from 'styled-components';
const PagePokemon = styled.div`
background: linear-gradient(to top left, #ff0000 0%, #ff99cc 100%);
background-size: contain;
`

export default function Root(){
    return (
        <PagePokemon>
            <div>
                <Header />
            </div>
            <div>
                <Outlet />

            </div>
        </PagePokemon>
    );
}