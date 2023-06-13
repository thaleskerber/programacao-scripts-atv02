import { Provider } from './contexto';
import "@fontsource/roboto"
import "./index.css"
import { LoteriaRoutes } from './routes';


function App() {

  return (
    <Provider>
      <LoteriaRoutes />
    </Provider>
  );
}

export default App;
