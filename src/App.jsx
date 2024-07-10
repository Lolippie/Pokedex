
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './page/Root';
import PokedexPage from './page/PokedexPage';
import PokemonPage from './page/Pokemon/PokemonPage';
import { pokemonLoader } from './page/Pokemon/pokemonLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element : <Root/>,
    children: [
      {
        index: true,
        element: <PokedexPage/>
      },
      {
        path:"/pokemon/:id",
        element: <PokemonPage/>,
        loader:pokemonLoader,
      }
    ]
  }
]);

function App() {
 return <RouterProvider router={router}/>;
}

export default App
