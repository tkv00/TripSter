import "./LoginSignUp.css";
import React, { useState,useEffect } from "react";
function SignUpPage3() {
    
  return (
    <div className="loginPageContainer">
      <div className="title" style={{marginTop:"-600px"}}>정보입력</div>
      <div className="infoContainer">
        <Element index={0}></Element>
        <Element index={1}></Element>
        <Element index={2}></Element>
        <Element index={3}></Element>
        <ElementEmail></ElementEmail>
        <button className="btn_next" style={{marginTop:"20px"}}>가입완료</button>
      </div>
    </div>
  );
}
//이메일 input상자 제외한 input상자
function Element(props) {
  let text = ["아이디", "비밀번호", "비밀번호 확인", "이름"];
  // placeholder 조건 설정
  let placeholderText = "";
  if (props.index === 0) {
    placeholderText = "6-20자 영문, 숫자";
  } else if (props.index === 1 || props.index === 2) {
    placeholderText = "8-12자 영문, 숫자";
  } // 인덱스가 3일 경우 placeholderText는 빈 문자열로 유지

  return (
    <div>
      <div className="text3">{text[props.index]}</div>
      <input className="inputText" placeholder={placeholderText}></input>
    </div>
  );
}
//이메일 input상자
function ElementEmail() {
  const [emailDomain, setEmailDomain] = useState("");

  return (
    <div style={{ textAlign: "left" }}>
      <div className="text3">이메일</div>
      <input className="inputText2"></input>
      <select
        className="emailDomainSelect"
        value={emailDomain}
        onChange={(e) => setEmailDomain(e.target.value)}
        style={{}}
      >
        <option value="">직접 입력</option>
        <option value="@gmail.com">@gmail.com</option>
        <option value="@naver.com">@naver.com</option>
        <option value="@daum.net">@daum.net</option>
        <option value="@nate.com">@nate.com</option>
        
      </select>
    </div>
  );
}
export default SignUpPage3;
