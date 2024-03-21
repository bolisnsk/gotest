import './Home.css';
import logo from '../images/제목.png';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
  const movePage = useNavigate();

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

  const startBtn = () =>{
    movePage('/Qna');
  }

  const allBtn = () =>{
    movePage('/Types');
  }

  return (
    <>
      <div className='testlayout'>
          <div className='startpage'>
            <img src={logo} alt='제목' style={{width: 440, height: 440}}/>
            <div className='tbutton' onClick={startBtn}>테스트 GOGO!</div>
          </div>
        </div>
    </>
  );
}

export default Home;