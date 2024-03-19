import React from 'react';
import {Background, LoadingText} from './Styles';
import Spinner from '../images/Spinner.gif';

export const Loading = () => {
    return (
        <Background>
            <LoadingText>잠시만</LoadingText>
            <img src={Spinner} alt='로딩중' width="5%" />
        </Background>
    );
};

export default Loading;
