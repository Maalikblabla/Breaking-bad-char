import React, {useState, useEffect} from 'react';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/ui/characters/CharacterGrid';
import './App.css';
import axios from 'axios';

function App() {
    const [items, setItems] = useState([])
    const [isLoading, usetIsLoading] = useState(true)
    const [query, setQuery] = useState('true')


    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

            // console.log(result.data)
            setItems(result.data)
            usetIsLoading(false)
        }
        fetchItems()
    }, [query])
  return (
    <div className="container">
        <Header />
        <Search getQuery={(q) => setQuery(q)}/>
        <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
