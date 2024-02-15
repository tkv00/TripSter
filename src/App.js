import React from "react";
import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Router 추가
import TextInput from "./component/TextInput.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpPage2 from "./Page/Login_SignUp/SignUpPage2.js";
import SignUpPage1 from "./Page/Login_SignUp/SignUpPage1.js";
import { AnimatePresence } from "framer-motion";
import "./Page/Login_SignUp/LoginSignUp.css";
import SignUpPage3 from "./Page/Login_SignUp/SignUpPage3.js";
function App() {
  return (
    
  
        <div className="App">
          <div className="logo">LOGO</div>
          <NavBar /> {/* NavBar를 여기에 배치합니다. */}
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
            <Route path="/signup1" element={<SignUpPage1/>}></Route>
            <Route path="/signup2" element={<SignUpPage2 />}></Route>
            <Route path="/signup3" element={<SignUpPage3/>}></Route>
          </Routes>
        </div>
     
  );
}

export function NavBar() {
  const location = useLocation(); // 현재 위치 추적
  const isMainPage = location.pathname === "/"; // 메인 페이지 여부 확인

  // 클래스 이름에 조건부로 'mainPage' 추가
  const linkClass = "menuItem linkItem" + (isMainPage ? " mainPage" : "");

  return (
    <div className="topMenu">
      <Link className={`${linkClass} menuItemHome`} to="/">
        HOME
      </Link>
      <Link
        className={`${linkClass} menuItemStartPlanning`}
        to="/start-planning"
      >
        START PLANNING
      </Link>
      <Link className={`${linkClass} menuItemLogin`} >
        로그인
      </Link>
      <Link className={`${linkClass} menuItemSignUp`} to="/signup1">
        회원가입
      </Link>
    </div>
  );
}

export default App;
