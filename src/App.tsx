import { ContadorRed } from './components/ContadorRed';
import { Counter } from './components/Counter';
import { Fomulario } from './components/Fomulario';
import { TimerPadre } from './components/TimerPadre';
import { Usuario } from './components/Usuario';

function App() {
  return (
    <div className="container">
      <h1>Hola Mundo</h1>
      <hr />
      <h2>use State</h2>
      <Counter />

      <Usuario />
      <h2>useEffect - useRef</h2>
      <hr />

      <TimerPadre />

      <h2>useReducer </h2>
      <hr />
      <ContadorRed />

      <h2>customHooks</h2>
      <hr />
      <Fomulario />

      <br />
      <br />
      <br />

    </div>
  );
}

export default App;
