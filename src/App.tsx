import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';

function App() {
  return (
    <div className="container">
      <h1>Hola Mundo</h1>
      <hr />
      <h2>use State</h2>
      <Counter />

      <Usuario />
    </div>
  );
}

export default App;
