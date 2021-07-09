import React from 'react';
import Cardlist from './components/Cardlist';
import SearchBar from './components/SearchBar'
import MovieSource from './api/MovieSource'
const name = document.getElementByUd('name')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

function App() {
  const [state, setState] = useState({
    result=[]
  });


  const onSearch = async (text) => {
    const results = await MovieSource.get("/", {
      params: { s: text, i: "tt3896198", apiKey: "5df883fb992f01bee97cec2957ea2327" },
    });

    setState(prevState => {
      return { ...prevState, results: results }
    })
  };

  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">
          React Search with Context API and Hooks
        </h2>
        <SearchBar onSearch={onSearch} />
        <CardList results={state.results} />

      </div>
    </div>


  );
}

export default App;
