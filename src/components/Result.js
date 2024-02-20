import React, { useEffect, useState } from 'react';
import './Result.css';
import resultdata from './contents/resultdata';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Result = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');
    const [resultData, setResultData] = useState({});

    useEffect(() => {
        const result = resultdata.find((s) => s.best === mbti);
        setResultData(result);
    }, [mbti])

    console.log(resultData);

    return (
        <div className='testlayout'>
            <div className='testpage'>
                <div className='resultpage'>
                    <div>당신에게 딱 맞는 고령군 여행지</div>
                    <div>{resultData.place}</div>
                    <div>{resultData.desc}</div>
                    <button onClick={() => navigate('/')}> 다시하기 </button>
                </div>
            </div>
        </div>
    );
};

export default Result;