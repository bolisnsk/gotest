import './App.css';
import Home from './components/Home';
import Qna from './components/Qna';
import Types from './components/Types';
import { Route, Routes} from 'react-router-dom';
import Result from './components/Result';

function App() {
  return(
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Qna" element={<Qna />} />
          <Route path='/Types' element={<Types />} />
          <Route path="/result" element={<Result />} />
        </Routes>
    </div>
  );
}

export default App;
