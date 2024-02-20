import jisan1 from '../../images/jisan1.jpg';
import museun from '../../images/museum.jpg';
import village from '../../images/village.jpg';
import dgaya from '../../images/daegaya.jpg';

const resultdata= [
    {
        id: 1,
        name: '고분군 가야돌이',
        place: '지산동 고분군',
        desc: '유네스코 세계유산에 등재된 장소!\n 한국사의 모든 고분군 중에서 가장 거대한 규모로 순장을 했던 고분군이에요!\n ',
        desc2: '고분군 등산로를 따라 등산하고 맑은 공기도 마실 수 있었어요. \n 고령이 한눈에 보인답니다.',
        best: 'TJ',
        img: `${jisan1}`,
    },
    {
        id: 2,
        name: '대가야돌이',
        place: '대가야 박물관',
        desc: '대가야의 역사를 자세하게 알 수 있는 곳!\n 실제 유물들을 관람할 수 있어요.\n ',
        desc2: '큐레이터분의 상세한 설명을 통해 대가야의 역사에 집중할 수 있었어요!\n 토기를 보며 감탄하고 왔답니다. \n 볼거리도 많고 아이들의 역사교육과 흥미유발에 좋은 장소인 거 같아요! ',
        best: 'FP',
        img: `${museun}`,
    },
    {
        id: 3,
        name: '환영 가야돌이',
        place: '개실마을',
        desc: '김종직 선생의 후손들의 집성촌!\n 전통체험과 전통숙소에서 숙박할 수 있어요!\n ',
        desc2: '전통 엿만들기 체험과 도자기컵 꾸미기 체험을 해봤어요. \n 엿의 재료와 만드는 방법을 차근차근 알려주셨어요.\n 손으로 직접 엿을 만들어보니 재밌었답니다. 나만의 도자기 컵을 만드는 체험도 즐거웠어요.',
        best: 'TP',
        img: `${village}`,
    },
    {
        id: 4,
        name: '가야돌이',
        place: '대가야 생활촌',
        desc: '대가야의 역사를 체험할 수 있는 곳!\n 다양한 볼거리, 즐길거리가 넘쳐요!',
        desc2: '다양한 포토존, 박물관, 작은 체험장, 놀이터 등이 있어서 돌아다니기 좋았어요! \n 공방 체험도 할 수 있고 생활촌 안에 있는 한기촌에서 숙박도 가능하답니다. \n',
        best: 'FJ',
        img: `${dgaya}`,
    },
]

export default resultdata;