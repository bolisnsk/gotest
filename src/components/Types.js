import resultdata from './contents/resultdata';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction:column;
`
const Text = styled.div`
    font-size: 20px;
    text-align: center;
    margin-top: 1.2rem;
`
const BoxComponent = styled.div`
    width: 380px;
    margin : 1.5rem;
    display: flex;
    flex-direction:column;
    padding: 1.5rem;
    border: 2px solid green;
    border-radius: 20px;

    @media (min-width: 768px) {
        width: 400px;
    }
    
    @media (min-width: 992px) {
        width: 480px;
    }
`
const TextWrapper = styled.div`
    font-family: IBMPlexSansKR-Regular;
`
const SmallText = styled.div`
    margin-top: 20px;
    font-size: 14px
`

const Types = () => {
    const navigate = useNavigate();

    return(
        <>
            <Wrapper>
            <Text>고령군 추천 여행지 모음!</Text>
                {resultdata.map((id) => (
                    <BoxComponent key={id.best}>
                        {id.place}
                        <TextWrapper>
                            <SmallText>{id.desc}</SmallText>
                        </TextWrapper>
                    </BoxComponent>
                ))}
                <button onClick={() => navigate('/Qna')}> 테스트 하러가기 </button>
            </Wrapper>
            
        </>
        
    );
};

export default Types;