import './App.css';
import logo from './images/제목.png';

function App() {
  return (
    <div className='testlayout'>
      <div className='startpage'>
        <img src={logo} alt='제목'/>
        <div className='tbutton'>테스트 GOGO!</div>
      </div>
    </div>
  );
}

export default App;
