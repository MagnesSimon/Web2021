import logo from './logo.svg';
import './App.css';
import banniere from './boulangerie/banniere.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={banniere} className="App-banniere" alt="banniere" />
        <h1 className="nomBoulangerie">Boulangerie Lonbois</h1>
      </header>
      <body>

      </body>
    </div>
  );
}

export default App;
