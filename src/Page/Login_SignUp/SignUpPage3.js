import "./LoginSignUp.css";
import SignUpInput from "../../component/SignUpInput";
import { SignUpInput_Email } from "../../component/SignUpInput";
import React, { useState, useEffect } from "react";
import Wrapper from "../../component/Wrapper";
function SignUpPage3() {
  return (
    <Wrapper>
      <div className="loginPageContainer">
        <div className="title">정보입력</div>
        <div className="infoContainer">
          <SignUpInput></SignUpInput>
        </div>
      </div>
    </Wrapper>
  );
}
export default SignUpPage3;
