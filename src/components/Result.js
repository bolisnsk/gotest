import React from 'react';
import './Result';
import resultdata from './contents/resultdata';

const Result = () => {
    return (
        <div className='testlayout'>
            <div className='testpage'>
                당신에게 딱 맞는 고령군 여행지
                <div>{resultdata[0].name}</div>
                <div>{resultdata[0].desc}</div>
            </div>
        </div>
    );
};

export default Result;