import React from "react";
import Wrapper from "../../component/Wrapper";
import "./LoginSignUp.css"; // Make sure to import the CSS file
import { Link, useNavigate } from "react-router-dom";
import emailIcon from "../../img/img1.png"; // 예시 경로, 실제 경로에 맞게 조정 필요
import kakaoIcon from "../../img/img2.png";
import NaverIcon from "../../img/img3.png";
// 이미지 매핑 객체
const icons = {
  Email: emailIcon,
  Kakao: kakaoIcon,
  Naver: NaverIcon,
};
function SignUpPage1() {
  return (
    <Wrapper>
      <div className="loginPageContainer">
        <div className="mainContent">
          <div className="contentBox"></div>
          <div className="specialTripText">Make your trip special</div>
          <div className="signupPrompt">
            지금 회원가입 하시고 다양한 여행 서비스를 경험해보세요!
          </div>
          <div className="orText">또는</div>
          {/* 이메일 가입버튼(회원가입 페이지로 이동 서버X) */}
          <BtnLoginTheme buttonName={1} />
          <div className="divider dividerLeft"></div>
          <div className="divider dividerRight"></div>
          {/* 카카오 로그인으로 이동 버튼 */}
          <BtnLoginTheme buttonName={2} />
          {/* 네이버 로그인으로 이동 버튼 */}
          <BtnLoginTheme buttonName={3} />
        </div>
      </div>
    </Wrapper>
  );
}

function BtnLoginTheme({ buttonName }) {
  const emailTextStyle = {
    color: buttonName === 2 ? "#391C1C" : "white", // 조건부 색상 적용
    textAlign: "center",
    fontSize: "23px",
    fontWeight: "600",
    fontFamily: "Pretendard",
    position: "absolute",
    left: "62px",
    top: "21px",
  };
  //버튼 클릭 훅 사용
  let navigate = useNavigate();
  let name = ["이메일로 가입하기", "카카오로 가입하기", "네이버로 가입하기"];
  let altName = ["Email", "Kakao", "Naver"];
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
      <div style={{ position: "relative", left: "200px" }}>
        <div style={emailTextStyle}>{name[index]}</div>
        <img
          style={{
            height: "34px",
            width: "36px",
            position: "relative",
            right: "298px",
            bottom: "19px",
            marginBlockStart: "38px",
          }}
          src={icon}
          alt={altName[index]}
        />
      </div>
    </div>
  );
}

export default SignUpPage1;
