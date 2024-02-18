import React, { useState,useEffect } from "react";
import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Router 추가
import TextInput from "./component/TextInput.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpPage2 from "./Page/Login_SignUp/SignUpPage2.js";
import SignUpPage1 from "./Page/Login_SignUp/SignUpPage1.js";
import { AnimatePresence } from "framer-motion";
import "./Page/Login_SignUp/LoginSignUp.css";
import Wrapper from "./component/Wrapper.js";
import LoginPage from "./Page/Login_SignUp/LoginPage.js";
import SignUpPage3 from "./Page/Login_SignUp/SignUpPage3.js";
function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <div className="logo">LOGO</div>
        <NavBar />
        <Wrapper>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <div className="App-header">
                    <TextInput />
                  </div>
                </div>
              }
            ></Route>
            <Route path="/signup1" element={<SignUpPage1 />}></Route>
            <Route path="/signup2" element={<SignUpPage2 />}></Route>
            <Route path="/signup3" element={<SignUpPage3 />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Routes>
        </Wrapper>
      </AnimatePresence>
    </div>
  );
}

export function NavBar() {
  const location = useLocation(); // 현재 위치 추적
  const [isScrolled, setIsScrolled] = useState(false);
  const isMainPage = location.pathname === "/"; // 메인 페이지 여부 확인



  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치에 따라 isScrolled 상태 업데이트
      if (window.scrollY > 50) {
        // 50px 이상 스크롤됐을 때 isScrolled를 true로 설정
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // scroll 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // 스크롤 상태 및 현재 페이지에 따른 클래스 이름 결정
  const topMenuClass = `topMenu ${isScrolled ? "scrolled" : ""}`;
  const linkClass = `menuItem linkItem${isMainPage ? " mainPage" : ""}${isScrolled ? " scrolled" : ""}`;

  return (
    <div className={topMenuClass}>
      <Link className={`${linkClass} menuItemHome`} to="/">
        HOME
      </Link>

      <Link
        className={`${linkClass} menuItemStartPlanning`}
        to="/start-planning"
      >
        START PLANNING
      </Link>

      <Link className={`${linkClass} menuItemLogin`} to="/login">
        로그인
      </Link>

      <Link className={`${linkClass} menuItemSignUp`} to="/signup1">
        회원가입
      </Link>
    </div>
  );
}

export default App;
