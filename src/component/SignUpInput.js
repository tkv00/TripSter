import "../Page/Login_SignUp/LoginSignUp.css";
import "./Header.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate,Route,Routes } from "react-router-dom";

function SignUpInput() {
  //아이디 중복체크버튼
  //아이디 상태관리
  const API_BASE_URL = "https://timer973.mycafe24.com";
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [userId, setUserId] = useState("");
  const [isIdValid, setIsIdValid] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    passwordConfirm: "",
    name: "",
    emailLocalPart: "", // 이메일 '@' 앞부분 (사용자 입력 부분)
    emailDomain: "", // 이메일 도메인 부분 (선택 또는 입력)
  });
  const [errors, setErrors] = useState({});
  // 이메일 도메인 변경 시 실시간으로 유효성 검사
  useEffect(() => {
    if (formData.emailLocalPart && formData.emailDomain) {
      const email = `${formData.emailLocalPart}${formData.emailDomain}`;
      validateEmail(email);
    }
  }, [formData.emailLocalPart, formData.emailDomain]);

  // 이메일 유효성 검사 함수 수정
  const validateEmail = (email) => {
    const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: isValidEmail ? "" : "유효한 이메일 주소를 입력해주세요.",
    }));
  };
  const validateEmailLocalPart = (emailLocalPart) => {
    // 이메일 로컬 파트에 대한 간단한 유효성 검사 예시
    // 실제 이메일 로컬 파트에는 더 많은 문자가 허용될 수 있음
    const isValidEmailLocalPart = /^[A-Z0-9._%+-]+$/i.test(emailLocalPart);
    setErrors((prevErrors) => ({
      ...prevErrors,
      emailLocalPart: isValidEmailLocalPart
        ? ""
        : "유효한 이메일을 입력해주세요.",
    }));
  };

  // 각 필드의 유효성 검사를 수행하는 함수
  const validateField = (name, value) => {
    switch (name) {
      case "id":
        if (!value) return "아이디를 입력하세요.";
        if (!/^[A-Za-z0-9]{6,12}$/.test(value))
          return "아이디는 6-12자 영문, 숫자 조합여야 합니다.";
        return "";

      case "password":
        if (!value) return "비밀번호를 입력하세요.";
        if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(value))
          return "비밀번호는 8-20자 영문, 숫자 조합여야 합니다.";
        return "";

      case "passwordConfirm":
        if (value !== formData.password) return "비밀번호가 일치하지 않습니다.";
        return "";

      case "name":
        if (!value) return "이름은 필수 입력칸입니다.";
        if (!/^[가-힣]+$/.test(value))
          // 한글 이름 검사
          return "이름은 한글로 입력해야 합니다.";
        return "";

      case "emailLocalPart":
        if (!value) return "이메일 앞부분을 입력하세요.";
        // 이메일 전체 유효성 검사는 별도로 진행
        return "";

      case "emailDomain":
        if (!value) return "이메일 도메인을 선택하세요.";
        // 선택한 도메인에 대한 추가 유효성 검사는 필요 없음
        return "";

      default:
        return "";
    }
  };

  // 입력 필드가 변경될 때마다 호출되는 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    // 변경된 내용을 formData 상태에 반영
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === "emailLocalPart") {
      validateEmailLocalPart(value);
    }
    // 아이디 필드 변경 시 유효성 검사 및 중복 확인 버튼 활성화 로직
    if (name === "id") {
      const isValid = /^[A-Za-z0-9]{6,12}$/.test(value);
      setIsIdValid(isValid); // 아이디 유효성 검사 결과에 따라 isIdValid 상태 업데이트
      if (!isValid) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          id: "아이디는 6-12자 영문, 숫자 조합이어야 합니다.",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, id: "" }));
      }
    }

    // 이메일 관련 필드 변경 시 유효성 검사 로직 추가
    if (name === "emailLocalPart" || name === "emailDomain") {
      const emailDomain = formData.emailDomain;
      const email = `${formData.emailLocalPart}${emailDomain}`;
      validateEmail(email); // 이메일 유효성 검사
    }
    // 필드별 유효성 검사 실행
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // 입력 조건을 충족하는지 확인하는 함수

  // 입력 조건을 충족하는지 확인
  const isFormValid =
    Object.values(formData).every((value) => value) &&
    Object.keys(errors).every((key) => !errors[key]);

  // 입력 조건을 충족하는지 확인하는 함수
  const isInputValid = (name) => {
    const value = formData[name];
    const error = errors[name];
    return value && !error;
  };
  const checkId = async (id) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/id-check`, { id });
      return response.data; // 서버로부터의 응답 처리
    } catch (error) {
      console.error("ID Check Error:", error);
      throw error; // 오류 처리
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert("모든 필드를 올바르게 입력해주세요.");
      return;
    }

    const finalEmail = `${formData.emailLocalPart}@${formData.emailDomain}`;
    try {
      const response = await axios.post(`${API_BASE_URL}/sign-up`, {
        id: formData.id,
        password: formData.password,
        name: formData.name,
        email: finalEmail,
      });
      if (response.data.success) {
        alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
        navigate("/login"); // 로그인 페이지로 리디렉션
      } else {
        alert(response.data.message); // 서버 에러 메시지 출력
      }
    } catch (error) {
      console.error("회원 가입 요청 실패:", error);
      alert("회원가입 과정에서 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleCheckDuplicateId = async () => {
    try {
      const { id } = formData;
      const response = await axios.post(`${API_BASE_URL}/id-check`, { id });
      if (response.data.isDuplicate) {
        alert("이미 사용 중인 아이디입니다.");
        setIsIdValid(false); // 중복된 아이디는 유효하지 않음
      } else {
        alert("사용 가능한 아이디입니다.");
        setIsIdValid(true);
      }
    } catch (error) {
      console.error("ID Check Error:", error);
      alert("아이디 중복 확인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* 아이디 필드 */}
        <div className="text3">아이디</div>
        {/* 아이디입력받는 inputtext */}
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          className={`inputText2 ${
            errors.id ? "inputError" : isInputValid("id") ? "inputSuccess" : ""
          }`}
          placeholder="6-12자 영문, 숫자 조합"
        />
        {/* 아이디 중복확인하는 버튼 */}
        <button
          className="emailDomainSelect"
          style={{
            color: "white",
            backgroundColor: isIdValid ? "#275efe" : "#C2C2C2",
            textAlign: "center",
            fontSize: "18px",
            fontFamily: "Pretendard",
            fontWeight: "600",
          }}
          onClick={handleCheckDuplicateId}
          disabled={!isIdValid}
        >
          아이디 중복 확인하기
        </button>
        {errors.id && <p className="errorMessage">{errors.id}</p>}

        {/* 비밀번호 필드 */}
        <div className="text3">비밀번호</div>
        {/* 비밀번호 입력 상자 */}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`inputText ${
            errors.password
              ? "inputError"
              : isInputValid("password")
              ? "inputSuccess"
              : ""
          }`}
          placeholder="8-20자 영문, 숫자 조합"
        />
        {errors.password && <p className="errorMessage">{errors.password}</p>}

        {/* 비밀번호 확인 필드 */}
        {/* 프론트 쪽 로직(서버 통신 필요없음) */}
        <div className="text3">비밀번호 확인</div>
        <input
          type="password"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleChange}
          className={`inputText ${
            errors.passwordConfirm
              ? "inputError"
              : isInputValid("passwordConfirm")
              ? "inputSuccess"
              : ""
          }`}
          placeholder="8-20자 영문, 숫자 조합"
        />
        {errors.passwordConfirm && (
          <p className="errorMessage">{errors.passwordConfirm}</p>
        )}

        {/* 이름 필드 */}
        <div className="text3">이름</div>
        {/* 이름 입력상자 */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`inputText ${
            errors.name
              ? "inputError"
              : isInputValid("name")
              ? "inputSuccess"
              : ""
          }`}
        />
        {errors.name && <p className="errorMessage">{errors.name}</p>}
        {/* 이메일 필드 */}
        <div className="text3">이메일</div>
        {/* 이메일 입력상자 */}
        <input
          type="text"
          name="emailLocalPart"
          value={formData.emailLocalPart}
          onChange={handleChange}
          className={`inputText2 ${
            errors.email
              ? "inputError"
              : isInputValid("emailLocalPart")
              ? "inputSuccess"
              : ""
          }`}
        />
        {/* 도메인 선택상자 */}
        <select
          name="emailDomain"
          value={formData.emailDomain}
          onChange={handleChange}
          className="emailDomainSelect"
        >
          <option value="">도메인 선택</option>
          <option value="@gmail.com">@gmail.com</option>
          <option value="@naver.com">@naver.com</option>
          <option value="@daum.net">@daum.net</option>
          <option value="@nate.com">@nate.com</option>
          <option value="@nate.com">@kakao.com</option>
          <option value="@nate.com">@yahoo.com</option>
          <option value="@nate.com">@hanmail.net</option>
          <option value="@nate.com">@hotmail.com</option>
        </select>
        {/* 서버로 이메일 정보 통신 시 email를 보내줘야함 즉, 도메인 주소와 사용자가 입력한 이메일을 합한거 */}
        {errors.email && <p className="errorMessage">{errors.email}</p>}
      </form>
      <button
        type="submit"
        disabled={!isFormValid}
        className="btn_next"
        style={{
          marginTop: "10px",
          backgroundColor: isFormValid ? "#275EFE" : "#C2C2C2",
        }}
      >
        가입완료
      </button>
    </div>
  );
}

export default SignUpInput;
