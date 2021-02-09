import './App.css';
import User from './components/User';
import React, {useState, useEffect} from 'react';

const data = [
  {
    name: 'Isa',
    description: 'Gosta de sorvete'
  },
  {
    name: 'Cintia',
    description: 'Gosta de goiabada cascão'
  },
  {
    name: 'Cintia',
    description: 'Gosta de mousse'
  }
];

const App = () => {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState(''); 
  const [description, setDescription] = useState('');

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type/5')
      .then(result => result.json())
        .then(result => {
          console.log(result)
          setPokemons(result.pokemon)
        })
      }, []);

  return (
    <div className="App">
      <section>
      {
        pokemons.map(pokemon => (
          <p> {pokemon.pokemon.name}</p>
        ))
      }
      </section>
    </div>
  );
}

export default App;
