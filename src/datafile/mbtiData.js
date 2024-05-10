import INFJ_img from "../../src/img/INFJ.png";
import ENFJ_img from "../../src/img/ENFJ.png";
import INFP_img from "../../src/img/INFP.png";
import ENFP_img from "../../src/img/ENFP.png";
import INTJ_img from "../../src/img/INTJ.png";
import ENTJ_img from "../../src/img/ENTJ.png";
import INTP_img from "../../src/img/INTP.png";
import ENTP_img from "../../src/img/ENTP.png";
import ISFJ_img from "../../src/img/ISFJ.png";
import ESFJ_img from "../../src/img/ESFJ.png";
import ISTJ_img from "../../src/img/ISTJ.png";
import ESTJ_img from "../../src/img/ESTJ.png";
import ISFP_img from "../../src/img/ISFP.png";
import ESFP_img from "../../src/img/ESFP.png";
import ISTP_img from "../../src/img/ISTP.png";
import ESTP_img from "../../src/img/ESTP.png";

const mbtiArray = [
  {
    mbti: "INTJ",
    img: INTJ_img,
    location: "경남 고성",
    des: "철두철미하게 미리 계획을 세우며 박물관, 미술관 등에서 깊고 넓은 지식을 쌓는 데 즐거움을 느끼는 타입",
  },
  {
    mbti: "INTP",
    img: INTP_img,
    location: "담양 죽녹원",
    des: "철학, 사색, 목마른 여행자 타입. 무언가 생각할 수 있게 하는 여행지를 선호하는 타입",
  },
  {
    mbti: "ENTP",
    img: ENTP_img,
    location: "부산",
    des: "느긋하고 관대한 타입. 위기 상황에서 판단을 잘하며 선입견없이 여행을 즐기는 타입",
  },
  {
    mbti: "ENTJ",
    img: ENTJ_img,
    location: "서산, 당진",
    des: "동행 중에서 리더 격으로 여행을 이끌며, 동행에게 알맞은 역할을 부여, 효율적인 여행을 이끌어 낸다. 넓은 범위의 여행지도 효율적을 여행하는 타입",
  },
  {
    mbti: "INFJ",
    img: INFJ_img,
    location: "전북 완주",
    des: "새로운 사람과 스스럼없이 어울리지만 사실 혼자만의 시간을 중요하게 여기는 타입",
  },
  {
    mbti: "INFP",
    img: INFP_img,
    location: "지리산 종주 코스",
    des: "최악의 상황에도 긍정적으로 더 나은 상황을 만들고자 노력. 높은 인내심으로 고난이도 여행지 소화하는 타입",
  },
  {
    mbti: "ENFJ",
    img: ENFJ_img,
    location: "속초 중앙 시장",
    des: "사람을 좋아해 소통하는 여행을 추구하며, 언어가 통하지 않아도 의사소통을 하는 신박한 능력을 보임. 지역별 시장을 돌며 현지 분들과 친밀도 업하기도 최적화된 타입",
  },
  {
    mbti: "ENFP",
    img: ENFP_img,
    location: "강원도 양양",
    des: "사람들과 어울리기를 좋아하는 인싸 타입. 액티비티를 선호하는 즉흥적인 타입",
  },
  {
    mbti: "ISTJ",
    img: ISTJ_img,
    location: "경주 역사지구",
    des: "계획적으로 움직이며 꼼꼼하게 여행지에 대해 공부해가는 타입. 장기 유럽 여행도 무리없이 소화 가능하며 유적지가 많은 여행지를 돌며 역사 탐방을 해보는 것도 즐거운 타입",
  },
  {
    mbti: "ISFJ",
    img: ISFJ_img,
    location: "전주 한옥마음",
    des: "계획적으로 움직이며 동행을 챙기는 스타일의 여행자. 감성적이며 가성비 좋은 여행지 추천! 적은 동선으로 여행하기 좋아하는 타입",
  },
  {
    mbti: "ESTJ",
    img: ESTJ_img,
    location: "서울",
    des: "호불호가 확실하며 깔끔하게 짜여지는 여행 스타일 선호(지금 이거 안맞다고 할 가능성 큼) 다양한 선택지를 준비하는 타입",
  },
  {
    mbti: "ESFJ",
    img: ESFJ_img,
    location: "전남 여수",
    des: "동행을 세심하게 배려하는 타입. 예기치 못한 상황에 걱정이 많은 편이라, 굳이 체력을 소모하는 여행지보다는 여행 코스짜기도 명확하고 난이도 쉬운 여행지 선호하는 타입",
  },
  {
    mbti: "ISTP",
    img: ISTP_img,
    location: "울릉도, 독도",
    des: "현실적이지만 대담한 스타일! 예기치 못한 상황도 무난히 해결하는 융통성 있는 여행타입",
  },
  {
    mbti: "ISFP",
    img: ISFP_img,
    location: "단양 패러글라이딩",
    des: "새로운 것을 시도할 준비가 된 예술가 타입의 여행자. 다만 종종 혼자만의 느긋한 시간 추구타입",
  },
  {
    mbti: "ESTP",
    img: ESTP_img,
    location: "제주도",
    des: "먹고 놀기 휴식하기 등 동시에 다양한 니즈를 만족시킬 수 있는 여행지 선호타입",
  },
  {
    mbti: "ESFP",
    img: ESFP_img,
    location: "강릉 거품파티",
    des: "즉흥적인 즐거움을 추구하며 스포트 라이트를 즐기는 여행자. 시끌벅적한 분위기에서 선호타입",
  },
];
export default mbtiArray;
