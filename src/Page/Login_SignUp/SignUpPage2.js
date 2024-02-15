import React, { useState } from "react";
import "./LoginSignUp.css";
import { useNavigate } from "react-router-dom";

function SignUpPage2() {
  let navigate = useNavigate();

  //다음 버튼 클릭시
  let handleNext = () => {
    navigate("/signup3");
  };
  const [allChecked, setAllChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState([
    false,
    false,
    false,
    false,
  ]);

  // 전체 동의 체크박스 핸들러
  const handleAllCheck = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    setTermsChecked(termsChecked.map(() => newAllChecked));
  };

  // 개별 체크박스 핸들러
  const handleCheck = (index) => {
    const updatedTermsChecked = termsChecked.map((item, i) =>
      i === index ? !item : item
    );
    setTermsChecked(updatedTermsChecked);

    // 모든 체크박스가 체크되었는지 확인하여 전체 동의 체크박스 상태 업데이트
    setAllChecked(updatedTermsChecked.every(Boolean));
  };

  // "다음" 버튼 활성화 조건: 상위 2개(필수) 체크박스가 체크되었는지 확인
  const isNextButtonEnabled = termsChecked.slice(0, 2).every(Boolean);

  return (
    <div className="loginPageContainer">
      <div className="title">약관동의</div>
      <div className="rectangle">
        <input
          id="c1"
          type="checkbox"
          name="All_check"
          checked={allChecked}
          onChange={handleAllCheck}
          style={{ position: "absolute", left: "83px", top: "38px" }}
        />
        <label htmlFor="c1" className="title1">
          약관 전체 동의
        </label>
        <div
          className="title2"
          style={{ paddingRight: "310px", paddingTop: "50px" }}
        >
          필수 동의 항목
        </div>
        {[0, 1].map((index) => (
          <Text
            key={index}
            index={index}
            checked={termsChecked[index]}
            onCheck={() => handleCheck(index)}
          />
        ))}
        <div
          className="title2"
          style={{ paddingRight: "310px", paddingTop: "50px" }}
        >
          선택 동의 항목
        </div>
        {[2, 3].map((index) => (
          <Text
            key={index}
            index={index}
            checked={termsChecked[index]}
            onCheck={() => handleCheck(index)}
          />
        ))}
      </div>

      <button
        className="btn_next"
        disabled={!isNextButtonEnabled}
        onClick={() => handleNext()}
        style={{
          backgroundColor: isNextButtonEnabled ? "#275EFE" : "#C2C2C2",
          marginTop: "780px",
        }}
      >
        다음
      </button>
    </div>
  );
}

function Text({ index, checked, onCheck }) {
  let text = [
    "[필수]이용약관 >",
    "[필수]개인정보 수집 동의서 >",
    "[선택]위치기반서비스 이용약관 >",
    "[선택]개인정보2 >",
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        marginLeft: "87px",
      }}
    >
      <input
        id={`c2`}
        type="checkbox"
        checked={checked}
        onChange={onCheck}
        style={{ marginRight: "10px" }}
      ></input>
      <label
        htmlFor={`c2-${index}`}
        className="small_text"
        style={{ cursor: "pointer" }}
      >
        {text[index]}
      </label>
    </div>
  );
}

export default SignUpPage2;
