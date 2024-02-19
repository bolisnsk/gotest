import './App.css';
import Home from './components/Home';
import Qna from './components/Qna';
import { Route, Routes} from 'react-router-dom';

function App() {
  return(
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Qna" element={<Qna />} />
        </Routes>
    </div>
  );
}

export default App;
