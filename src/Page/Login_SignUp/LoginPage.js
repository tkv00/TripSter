import "./LoginSignUp.css";
import React, { useState } from "react";
import kakaoIcon from "../../img/img2.png";
import NaverIcon from "../../img/img3.png";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../component/Wrapper";
function LoginPage() {
  // 각 페이지들로 이동
  let navigate = useNavigate();
  let list = ["/findId", "/findPassword", "/signup1"];
  let handleNext = (props) => {
    navigate(props);
  };
  // 입력 상태를 관리하기 위한 useState 훅
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 버튼 활성화 상태 관리
  const isButtonEnabled = userId.length > 0 && password.length > 0;

  return (
    <Wrapper>
      <div className="loginPageContainer">
        <div className="title">로그인 </div>
        <div className="infoContainer">
          <div className="text3">아이디</div>
          <input
            className="inputText"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <div className="text3">비밀번호</div>
          <input
            className="inputText"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="checkboxContainer">
            <label className="Logincontent">
              <input type="checkbox" id="c3" />
              <div style={{ marginLeft: "10px" }}>자동로그인</div>
            </label>
            <label className="Logincontent">
              <input type="checkbox" id="c3" />
              <div style={{ marginLeft: "10px" }}>아이디 저장</div>
            </label>
          </div>

          <button
            className="authButton authButtonKakao LoginBox"
            style={{
              top: "30px",
              color: "#391C1C",
              paddingLeft: "50px",
            }}
          >
            카카오 로그인
            <img className="LoginBtn" src={kakaoIcon} alt="kakao"></img>
          </button>
          <button
            className="authButton authButtonNaver LoginBox"
            style={{
              top: "50px",
              color: "white",
              display: "block",
              paddingLeft: "50px",
            }}
          >
            네이버 로그인
            <img className="LoginBtn" src={NaverIcon} alt="Naver"></img>
          </button>

          {/* 아이디 찾기,비번찾기,회원가입 */}
          <div className="findOptionsContainer">
            <div className="findText">아이디 찾기</div>
            <div className="vertical"></div>
            <div className="findText">비밀번호 찾기</div>
            <div className="vertical"></div>
            <div className="findText" onClick={() => handleNext(list[2])}>
              회원가입
            </div>
          </div>

          {/* 로그인 버튼 */}
          <button
            className="btn_next"
            style={{
              marginTop: "70px",
              backgroundColor: isButtonEnabled ? "#0038ff" : "#c2c2c2",
            }}
            disabled={!isButtonEnabled}
          >
            로그인
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default LoginPage;
