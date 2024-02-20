import { createSearchParams, useNavigate } from 'react-router-dom';
import './Qna.css'
import qnaList from './contents/questions';
import { useState, useEffect } from 'react';

function Qna() {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [totalScore, setTotalScore] = useState([
        {id: "TF", score: 0},
        {id: "JP", score: 0},
    ])
    const navigate = useNavigate();

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
    
    const handleClickButton = (no, type) => {
        const newScore = totalScore.map((s) =>
            s.id === type ? {id : s.id, score: s.score + no} : s
        );

        setTotalScore(newScore);

        if(qnaList.length !== questionNumber + 1){
            setQuestionNumber(questionNumber + 1);
        } else {
            const mbti = newScore.reduce(
                (acc, curr) => acc + (curr.score >= 2 ? curr.id.substring(0, 1): curr.id.substring(1,2)),
                ""
            );
            console.log('mbti', mbti);
            navigate({
                pathname: "/result",
                search: `?${createSearchParams({
                    mbti: mbti,
                })}`
            }
            );
        }
        setQuestionNumber(questionNumber + 1);
    }

    return (
        <>
            <div className='testlayout'>
                <div className='testpage'>
                <div className='progressBar'>
                    <div className='highlight' style={{width: (questionNumber/ qnaList.length ) * 100  + "%"} }></div>
                    </div>
                    <div className='question'>
                    <div>Q{questionNumber + 1}. </div>
                    {qnaList[questionNumber].q}</div>
                    <div className='btnGroup'>
                        <button onClick={() => handleClickButton(2, qnaList[questionNumber].type)}> {qnaList[questionNumber].a1} </button>
                        <button onClick={() => handleClickButton(1, qnaList[questionNumber].type)}> {qnaList[questionNumber].a2} </button>
                        <button onClick={() => handleClickButton(0, qnaList[questionNumber].type)}> {qnaList[questionNumber].a3} </button>
                    </div>         
                </div>
            </div>
        </>
    );
}

export default Qna;