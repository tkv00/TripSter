import React, { useState } from "react";
import "./LoginSignUp.css";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../component/Wrapper";
import TermsOfService from "../../component/TermsOfService";
function SignUpPage2() {
  // 이 페이지는 서버통신 할 필요없음
  let navigate = useNavigate();
  //이용약관 모달박스
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTermId, setCurrentTermId] = useState('');
  const showTerms = (termId) => {
    setCurrentTermId(termId);
    setModalOpen(true);
  };
  let modeName=['termsOfService','privacyPolicy','locationServices','additionalPrivacy'];
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
    <Wrapper>
      <div className="loginPageContainer">
        <div>
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
                onClick={() => showTerms(modeName[index])}
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
                onClick={() => showTerms(modeName[index])} 
              />
            ))}
          </div>
          <TermsOfService isOpen={modalOpen} termId={currentTermId} onClose={() => setModalOpen(false)} />

          <button
            className="btn_next"
            disabled={!isNextButtonEnabled}
            onClick={() => handleNext()}
            style={{
              backgroundColor: isNextButtonEnabled ? "#275EFE" : "#C2C2C2",
              marginTop: "580px",
            }}
          >
            다음
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

function Text({ index, checked, onCheck,onClick }) {
  let text = [
    "[필수]Trapster 이용약관 >",
    "[필수]개인정보 수집 및 이용에 대한 동의 >",
    "[선택]위치기반 서비스 이용약관 >",
    "[선택]마케팅 및 광고 목적을 위한 개인정보 처리 동의서 >",
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
        onClick={onClick}
      >
        {text[index]}
      </label>
    </div>
  );
}

export default SignUpPage2;
