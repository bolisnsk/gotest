import React from "react";

const { Kakao } = window;

const Kakaobtn = ({data}) => {
    const url = "https://goryeong-test.netlify.app";
    const resultUrl = window.location.href;

    if (!Kakao.isInitialized()) {
        Kakao.init("c40db106dba30c9975c1368d5f8d4d6a");
    }

    const shareKakao = () => {
        Kakao.Link.sendDefault({
            objectType: "feed",
            content: {
            title: "고령 여행지 추천 결과",
            description: `나에게 딱맞는 고령 여행지는 ${data.place}입니다.`,
            imageUrl: url + data.img,
            link: {
                mobileWebUrl: resultUrl,
                webUrl: resultUrl,
            },
        },
        buttons: [
            {
                title: "나도 테스트하러가기",
                link: {
                mobileWebUrl: url,
                webUrl: url,
                },
            },
            ],
        });
    };

    return (
    <button onClick={shareKakao}>
        카카오톡 공유하기
    </button>
    );
};

export default Kakaobtn;