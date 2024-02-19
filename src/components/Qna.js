import './Qna.css'
import qnaList from './contents/questions';
import { useState, useEffect } from 'react';

function Qna() {
    let [questionNumber, setQuestionNumber] = useState(0);
    console.log(qnaList);
    console.log(qnaList[questionNumber].a);

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
    
    const handleClickButton = (no) => {
        setQuestionNumber(questionNumber + 1);
    }

    const handleClickButton2 = (no) => {
        setQuestionNumber(questionNumber + 1);
    }

    return (
        <>
            <div className='testlayout'>
                <div className='testpage'>
                <progressBar />
                    <div className='question'>{qnaList[questionNumber].q}</div>
                    <buttonGroup>
                        <button onClick={() => handleClickButton(1)}> {qnaList[questionNumber].a1} </button>
                        <button onClick={() => handleClickButton2(0)}> {qnaList[questionNumber].a2} </button>
                        <button onClick={() => handleClickButton2(0)}> {qnaList[questionNumber].a3} </button>
                    </buttonGroup>         
                </div>
            </div>
        </>
    );
}

export default Qna;