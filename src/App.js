import './App.css';
import Usestate from './Components/USESTATE/Usestate';
import ImportExpport from './Components/IMPORTEXPORT/ImportExpport';
import { Export } from './Components/IMPORTEXPORT/Export';
function App() {
  return (
    <div className="App">
      <Usestate/>
      <ImportExpport/>
      <Export/>
    </div>
  );
}

export default App;
