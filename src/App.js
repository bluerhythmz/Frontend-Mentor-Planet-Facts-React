import './App.css';
import Header from './components/Header';
import Planet from './components/Planet';
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Planet />
      </div>
    </Router>
  );
}

export default App;
