import React from 'react';
import './Result.css';
import resultdata from './contents/resultdata';
import { useNavigate } from 'react-router-dom';

const Result = () => {
    const navigate = useNavigate();

    return (
        <div className='testlayout'>
            <div className='testpage'>
                <div className='resultpage'>
                    <div>당신에게 딱 맞는 고령군 여행지</div>
                    <div>{resultdata[0].name}</div>
                    <div>{resultdata[0].desc}</div>
                    <button onClick={() => navigate('/')}> 다시하기 </button>
                </div>
            </div>
        </div>
    );
};

export default Result;