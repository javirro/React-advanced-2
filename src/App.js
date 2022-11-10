
import './App.css';
import { RequestExampleWrapper } from './components/RequestExample';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RequestExampleWrapper pokemonName={"mew"} />
      </header>
    </div>
  );
}

export default App;
