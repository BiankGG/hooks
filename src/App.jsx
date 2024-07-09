import './App.css';
import useFetchCharacters from './hooks/useFecthCharacters';


function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const hookPokemon = useFetchCharacters(urlPokemon)
  const hookRick = useFetchCharacters(urlRick)

  const { data, loading, error } = useFetchCharacters(urlPokemon);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
    <div>
      <h1>Data First Pokemon</h1>
        <h2>{hookPokemon.data.name}</h2>
        <img src={hookPokemon.data.sprites.front_default}/>
      <h1>Data first Rick&Morty Character</h1>
        <h2>{hookRick.data.name}</h2>
        <img src={hookRick.data.image}/>
    </div>
    </>
  );
}

export default App;
