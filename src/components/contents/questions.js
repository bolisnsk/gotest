const qnaList = [
    {
        q: '여행을 떠나는 당신!\n 여행의 주목적은 무엇인가요?',
        a1: '맛집탐방',
        a2: '체험활동', 
        a3: '자연 즐기기',
        type: 'TF',
    },
    {
        q: '여행 일정을 짜야한다!',
        a1: '여행은 즉흥적인 게 최고~ 폰만 있으면 된다',
        a2: '예상시간 딱딱! 시간별로 계획을 짠다', 
        a3: '뒷일은 미래의 나에게...\n 큰 계획만 짜고 나머지는 운에 맡긴다', 
        type: 'JP',
    },
    {
        q: '가려고했던 맛집이 문을 닫았다!\n 어떡하지?',
        a1: '근처에 맛있어 보이는 곳에 들어간다.', 
        a2: '이럴줄 알고 검색했지..2안으로 간다.',
        a3: '뇌정지...급하게 다른 곳 검색해본다.',
        type: 'JP',
    },
    {
        q: '여행 짐싸기. 언제부터?',
        a1: '하루 전 벼락치기 짐싸기 ', 
        a2: '일주일 전부터 야무지게 짐싸기 ', 
        a3: '아~무 생각 없다. 나가기 전에 후다닥 챙긴다. ', 
        type: 'JP',
    },
    {
        q: '숙소예약을 해야한다.\n 어떤 숙소를 고르지?',
        a1: '잠만 자면 된다! 컨디션은 모르겠고 가격이 싼 숙소 ', 
        a2: '감성을 느낄 수 있는 전통숙소 ', 
        a3: '그럭저럭 가성비 호텔 ',
        type: 'EI',
    },

    {
        q: '여행 다녀오고 나서',
        a1: '짐정리는 하고 누워야지..도착하자 마자 짐정리 ', 
        a2: '일단 침대에 누워! 내일 정리 ', 
        a3: '영원히 열지 않는다. ',
        type: 'SN',
    },
    {
        q: '혼밥러는 합석을 해야한다..',
        a1: '모두와 친구가 되자! 연락처까지 구한다.', 
        a2: '옆자리 사람과 이야기하며 먹는다.', 
        a3: '묵묵히 밥만 먹고 빨리 나간다.',
        type: 'EI',
    },
    {
        q: '여행지에서 길을 잃었다!',
        a1: '주변인을 붙잡고 물어본다.', 
        a2: '일단 왔던 길로 다시 가본다.', 
        a3: '지도앱을 열고 폭풍 검색',
        type: 'EI',
    },
    {
        q: '특이한 건축물을 보며 드는 생각은?',
        a1: '저건 어떻게 만든 걸까?', 
        a2: '감탄한다.', 
        a3: '그렇군. 아~무 생각 없다. ',
        type: 'TF',
    },
    {
        q: '여행 언제부터 집에 가고 싶나요?',
        a1: '첫날부터 집이 그립다.', 
        a2: '3일차..슬슬 집이 그립다.', 
        a3: '너무 좋고 신난다! 더 있고 싶어!!',
        type: 'EI',
    },
]

export default qnaList;