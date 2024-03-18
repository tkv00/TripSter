import "../Page/Login_SignUp/LoginSignUp.css";
import "./Header.css";
import React, { useState, useEffect } from "react";

function SignUpInput() {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    passwordConfirm: "",
    name: "",
    emailLocalPart: "",
    emailDomain: "",
  });

  const [errors, setErrors] = useState({});
  const [isIdValid, setIsIdValid] = useState(false);

  useEffect(() => {
    if (formData.emailLocalPart && formData.emailDomain) {
      const email = `${formData.emailLocalPart}${formData.emailDomain}`;
      validateEmail(email);
    }
  }, [formData.emailLocalPart, formData.emailDomain]);

  const validateEmail = (email) => {
    const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: isValidEmail ? "" : "유효한 이메일 주소를 입력해주세요.",
    }));
  };

  const validateEmailLocalPart = (emailLocalPart) => {
    const isValidEmailLocalPart = /^[A-Z0-9._%+-]+$/i.test(emailLocalPart);
    setErrors((prevErrors) => ({
      ...prevErrors,
      emailLocalPart: isValidEmailLocalPart
        ? ""
        : "유효한 이메일을 입력해주세요.",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "emailLocalPart") {
      validateEmailLocalPart(value);
    }

    if (name === "id") {
      const isValid = /^[A-Za-z0-9]{6,12}$/.test(value);
      setIsIdValid(isValid);

      setErrors((prevErrors) => ({
        ...prevErrors,
        id: isValid ? "" : "아이디는 6-12자 영문, 숫자 조합이어야 합니다.",
      }));
    }

    if (name === "emailLocalPart" || name === "emailDomain") {
      const emailDomain = formData.emailDomain;
      const email = `${formData.emailLocalPart}${emailDomain}`;
      validateEmail(email);
    }

    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validateField = (name, value) => {
    switch (name) {
      case "id":
        if (!value) return "아이디를 입력하세요.";
        if (!/^[A-Za-z0-9]{6,12}$/.test(value))
          return "아이디는 6-12자 영문, 숫자 조합이어야 합니다.";
        return "";

      case "password":
        if (!value) return "비밀번호를 입력하세요.";
        if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(value))
          return "비밀번호는 8-20자 영문, 숫자 조합이어야 합니다.";
        return "";

      case "passwordConfirm":
        if (value !== formData.password) return "비밀번호가 일치하지 않습니다.";
        return "";

      case "name":
        if (!value) return "이름은 필수 입력칸입니다.";
        if (!/^[가-힣]+$/.test(value)) return "이름은 한글로 입력해야 합니다.";
        return "";

      case "emailLocalPart":
        if (!value) return "이메일 앞부분을 입력하세요.";
        return "";

      case "emailDomain":
        if (!value) return "이메일 도메인을 선택하세요.";
        return "";

      default:
        return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert("모든 필드를 올바르게 입력해주세요.");
      return;
    }

    const finalEmail = `${formData.emailLocalPart}${formData.emailDomain}`;
    try {
      const response = await fetch("http://172.30.1.13:8080/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: formData.id,
          password: formData.password,
          name: formData.name,
          email: finalEmail,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        if (data.success) {
          alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
          //navigate("/login"); // 로그인 페이지로 리디렉션
        } else {
          alert(data.message); // 서버 에러 메시지 출력
        }
      } else {
        throw new Error("회원가입 요청 실패");
      }
    } catch (error) {
      console.error("회원 가입 요청 실패:", error);
      alert("회원가입 과정에서 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const isFormValid = () => {
    return (
      Object.values(formData).every((value) => value) &&
      Object.keys(errors).every((key) => !errors[key])
    );
  };

  const isInputValid = (name) => {
    const value = formData[name];
    const error = errors[name];
    return value && !error;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="text3">아이디</div>
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
          disabled={!isIdValid}
        >
          아이디 중복 확인하기
        </button>
        {errors.id && <p className="errorMessage">{errors.id}</p>}
        <div className="text3">비밀번호</div>
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

        <div className="text3">이름</div>
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

        <div className="text3">이메일</div>
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
          <option value="@kakao.com">@kakao.com</option>
          <option value="@yahoo.com">@yahoo.com</option>
          <option value="@hanmail.com">@hanmail.net</option>
          <option value="@hotmail.com">@hotmail.com</option>
        </select>
        {errors.email && <p className="errorMessage">{errors.email}</p>}
        <button
          type="submit"
          disabled={!isFormValid()}
          className="btn_next"
          style={{
            marginTop: "10px",
            backgroundColor: isFormValid() ? "#275EFE" : "#C2C2C2",
          }}
        >
          가입완료
        </button>
      </form>
    </div>
  );
}

export default SignUpInput;
