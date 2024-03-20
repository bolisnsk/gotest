import resultdata from './contents/resultdata';
import styled from 'styled-components';

const Wrapper = styled.div`
    align-items: center;
    max-width: 900px;
`

const Text = styled.div`
    font-size: 20px;
    text-align: center;
    margin-top: 1.5rem;
`
const BoxComponent = styled.div`
    width: 100%;
    margin : 2rem;
    display: flex;
    flex-direction:column;
    padding: 1.5rem;
    border: 2px solid green;
    border-radius: 20px;
`
const TextWrapper = styled.div`
    
`
const SmallText = styled.div`
    margin-top: 20px;
    font-size: 14px
`

const Types = () => {

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
            </Wrapper>
        </>
        
    );
};

export default Types;