import './App.css';
import logo from './images/제목.png';
import { useState, useEffect } from 'react';

function App() {
  const [page, setPage] = useState(0);

  /**  height 100vh를 쓸 경우 불필요한 스크롤이 생기게 됨
   * 크롬의 주소창, 하단 네비게이션까지를 사이즈에 포함하기 때문에 뷰어의 사이즈가 실제 화면보다 크게 잡혀서임  */
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(()=>{
    setVh();

    function onResize() {
      setVh();
    }

    window.addEventListener('resize', onResize);
  }, [])

  return (
    <div className='testlayout'>
      {page === 0?
        <div className='startpage'>
          <img src={logo} alt='제목'/>
          <div className='tbutton' onClick={() => setPage(1)}>테스트 GOGO!</div>
        </div>
        :
        <div>
          테스트 페이지
        </div>
      } 
    </div>
  );
}

export default App;
