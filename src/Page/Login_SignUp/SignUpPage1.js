import React from "react";
import "./LoginSignUp.css"; // Make sure to import the CSS file
import { Link, useNavigate } from "react-router-dom";
import emailIcon from "../../img/img1.png"; // 예시 경로, 실제 경로에 맞게 조정 필요
import kakaoIcon from "../../img/img2.png";
import googleIcon from "../../img/img3.png";
import { NavBar } from "../../App.js";
// 이미지 매핑 객체
const icons = {
  Email: emailIcon,
  Kakao: kakaoIcon,
  Google: googleIcon,
};
function LoginPage() {
  return (
    <div className="loginPageContainer">
      <NavBar />
      <div className="mainContent">
        <div className="contentBox"></div>
        <div className="specialTripText">Make your trip special</div>
        <div className="signupPrompt">
          지금 회원가입 하시고 다양한 여행 서비스를 경험해보세요!
        </div>
        <div className="orText">또는</div>
        <BtnLoginTheme buttonName={1} />
        <div className="divider dividerLeft"></div>
        <div className="divider dividerRight"></div>
        <BtnLoginTheme buttonName={2} />
        <BtnLoginTheme buttonName={3} />
      </div>
    </div>
  );
}

function BtnLoginTheme({ buttonName }) {
  const emailTextStyle = {
    color: buttonName === 1 ? "white" : "#391C1C", // 조건부 색상 적용
    textAlign: "center",
    fontSize: "1.1979vw",
    fontWeight: "600",
    fontFamily: "Pretendard",
    position: "absolute",
    left: "3.2323vw",
    top: "1.1vw",
  };
  //버튼 클릭 훅 사용
  let navigate = useNavigate();
  let name = ["이메일로 가입하기", "카카오로 가입하기", "Google로 가입하기"];
  let altName = ["Email", "Kakao", "Google"];
  let index = buttonName - 1;
  let icon = icons[altName[index]];

  const handleClick = () => {
    if (buttonName === 1) {
      // 이메일로 가입하기 버튼일 경우
      navigate("/signup2"); // 회원가입 경로로 이동
    }
  };

  return (
    <div
      className={`authButton authButton` + altName[index]}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div style={{ position: "relative", left: "10.4333vw" }}>
        <div style={emailTextStyle}>{name[index]}</div>
        <img
          style={{
            height: "1.7708vw",
            width: "1.8750vw",
            position: "relative",
            right: "15.5vw",
            bottom: "1vw",
            marginBlockStart: "2vw",
          }}
          src={icon}
          alt={altName[index]}
        />
      </div>
    </div>
  );
}

export default LoginPage;
