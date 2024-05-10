import styled from "styled-components";
import mbtiArray from "../datafile/mbtiData";
const HeaderContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 50px;
`;
const MainText = styled.header`
  color: #0038ff;
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: max(3.3854vw, 10px);
  text-align: left;
  padding-bottom: 10px;
  padding-left: 10%;
`;
const SubText = styled.p`
  color: black;
  text-align: left;
  font-size: 15px;
  margin: 0px;
  padding-left: 10%;
  @media (max-width: 800px) {
    display: none;
  }
`;
const MainContainer = styled.div`
  position: relative;
  margin: 5% 7.5%;
  place-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 25px;
`;
const CardContainer = styled.div`
  height: 420px;
  bottom: auto;
  border-radius: 15px;
  background-color: #f5f5f5;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
    width: 250px;
    height: 300px;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
    width: 150px;
    height: 180px;
  }
  &:hover {
    transform: scale(1.2);
    transition: transform 0.5s ease-in-out;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
const CardImg = styled.img`
  width: 300px;
  height: auto;
  top: 90px;
  display: flex;
  position: relative;
  @media (max-width: 1400px) {
    width: 200px;
    height: auto;
    top: 70px;
  }
  @media (max-width: 1000px) {
    width: 150px;
    height: auto;
    top: 50px;
  }
`;
const Ballon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 150px;
  height: 40px;
  margin-top: 40px;
  background: #2d62f1;
  color: white;
  border-radius: 20px;
  padding: 12px 12.8px;
  &::after {
    border-top: 10px solid #2d62f1;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    top: 40px;
    margin-left: -10px;
  }
  @media (max-width: 1400px) {
    width: 150px;
    margin-top: 20px;
  }
  @media (max-width: 1000px) {
    width: 100px;
    margin-top: 5px;
  }
`;
const BallonText = styled.div`
  text-align: center;
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-size: max(1.5vw, 10px);
  //margin-top: -0.5729vw;
`;
const CardDescription = styled.div`
  font-size: 12px;
  margin-top:30%;
  padding: 10px;
  text-align: center;
  @media (max-width: 1400px) {
    font-size: 10px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const LocationBox = styled.div`
  display: flex;
  justify-content: center;
  width: 135px;
  height: 33px;
  border-radius: 20px;
  align-items: center;
  background-color: white;
  color: #2d62f1;
  text-align: center;
  position: absolute;
  font-weight: 700;
  margin-top: 360px;
  @media (max-width: 1400px) {
    margin-top: 250px;
  }
  @media (max-width: 1000px) {
    margin-top: 135px;
  }
`;
function MyTravelType() {
  return (
    <>
      <HeaderContainer>
        <MainText>MY TRAVEL TYPE</MainText>
        <SubText>
          여행 장소를 정하기 힘들다면 mbti 성격 유형에 따라 여행지를
          선택해보는게 어떤가요?
        </SubText>
        <SubText>나의 여행 타입을 알아보고 목적지를 선택해보세요!</SubText>
      </HeaderContainer>
      <MainContainer>
        {mbtiArray.map((item, index) => (
          <CardContainer key={index}>
            <CardImg src={item.img} alt={`MBTI Type:${item.mbti}`}></CardImg>
            <Ballon>
              <BallonText>{item.mbti}</BallonText>
            </Ballon>
            <CardDescription>{item.des}</CardDescription>
            <LocationBox>{item.location}</LocationBox>
          </CardContainer>
        ))}
      </MainContainer>
    </>
  );
}
export default MyTravelType;
