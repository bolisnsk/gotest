const qnaList = [
    {
        q: '1. 여행을 떠나는 당신!\n 바다와 산 둘중 어디로 가고 싶나요?',
        a1: '바다',
        a2: '산', 
        a3: '계곡',
    },
    {
        q: '2. 여행 일정을 짜야한다!',
        a1: '여행은 즉흥적인 게 최고~ 폰만 있으면 된다',
        a2: '예상시간 딱딱! 시간별로 계획을 짠다', 
        a3: '뒷일은 미래의 나에게...\n 큰 계획만 짜고 나머지는 운에 맡긴다', 
    },
    {
        q: '3. 밥 먹을 때 쩝쩝 거리는 친구가 있다!\n  당신의 행동은?',
        a1: '같이 쩝쩝 거린다.', 
        a2: '조용히 먹으라고 한마디 한다.',
        a3: '거슬리지만 그냥 가만히 있는다',
    },
    {
        q: '4. 커다란 등신대를 가지고 지하철에 탔다!\n  사람들이 날 쳐다보는 것 같다..',
        a1: '너무 부끄럽고 창피하다. 숨고싶다. ', 
        a2: '등신대 구경하라고 옆에 둔다. ', 
        a3: '아~무 생각 없다. ', 
    },
    {
        q: '5. 팀플인데 아무도 일을 하지 않는다.\n  어떻게 해야 하지?',
        a: [
            { answer: '고생하더라도 내가 다 한다.', type: [0, 5, ] },
            { answer: '같이 안 한다.', type: [1, 3,]},
            { answer: '어떻게든 이끌어서 같이 일한다.', type: [ 2, 4, ] },
        ]
    },
  
    {
        q: '6. 친구가 아프다고 연락이 왔다!\n  당신의 반응은?',
        a: [
            { answer: '헉 어디가 아파? ', type: [0, 2,  ] },
            { answer: '헉 병원 다녀왔어? ', type: [1, 3, ] },
            { answer: '헉 많이 아파?', type: [  4, 5, ] },
        ]
    },
    {
        q: '7. 친구가 오늘 머리를 바꾸고 옷도 새로 샀다',
        a: [
            { answer: '눈치 못 채고 그냥 있는다.', type: [ 3, ] },
            { answer: '눈치는 채나 말은 꺼내지 않는다.', type: [0, 2, 4, ] },
            { answer: '오 바꿨네?! 단번에 눈치챈다.', type: [1, 5, ] },
        ]
    },
    {
        q: '8. 친구와 헤어지면서 집 도착하면 연락해~ 라는 말을 들었다',
        a: [
            { answer: '집 도착하자마자 연락한다.', type: [1, 4, 5, ] },
            { answer: '까먹는다.', type: [0, 2, ] },
            { answer: '귀찮아서 안 한다.', type: [3, ] },
        ]
    },
    {
        q: '9. 심심한데 뭐하지?',
        a: [
            { answer: '친구에게 연락하기', type: [4, ] },
            { answer: '인스타, 유튜브 같이 SNS 들락날락 무한 사이클', type: [ 1, 2, 3, ] },
            { answer: '혼자서도 잘 놀아요! 취미 생활 하기', type: [0, 5,] },
        ]
    },
    {
        q: '10. 혼자만의 시간을 보내고 있던 당신!\n  친구에게 전화가 온다. ',
        a: [
            { answer: '받지 않는다.', type: [ 2, 5, ] },
            { answer: '반가워 하면서 받는다.', type: [0,  ] },
            { answer: '기다렸다가 끊기지 않으면 마지못해 받는다.', type: [1, 4, 3, ] },
        ]
    },
]

export default qnaList;