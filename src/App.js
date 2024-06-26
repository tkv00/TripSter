import React, { useState, useEffect } from "react";
import "./App.css";
import "./component/Slider.js";
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
import Slider from "./component/Slider.js";
import place0 from "./img/place0.jpeg";
import place1 from "./img/place1.jpeg";
import place2 from "./img/place2.jpg";
import place3 from "./img/place3.jpeg";
import Banner from "./component/Banner.js";
import PlanBoard from "./component/PlanBoard.js";
import LoginHandler from "./component/LoginHandler.js";
import PlanBoard2 from "./component/PlanBoard2.js";
import ContainerBelt from "./component/ContainerBelt.js";
import PopularTrip from "./component/PopularTrip.js";
import Footer from "./component/Footer.js";
import MyTravelType from "./Page/MyTravelType.jsx";
function App() {
  const slideData = [
    {
      index: 0,
      headline: "SEOUL",
      src: place0,
    },
    {
      index: 1,
      headline: "BUsSAN",
      src: place1,
    },
    {
      index: 2,
      headline: "JEJU",
      src: place2,
    },
    {
      index: 3,
      headline: "DEAGU",
      src: place3,
    },
  ];
  return (
    <div className="App">
      {/* 상단 바 서버통신X */}
      <NavBar />
      <Wrapper>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="App-header">
                  <div className="contain">
                    {/* 홈페이지 전체 검색 */}
                    <TextInput />
                    <Slider heading="Example Slider" slides={slideData} />
                    {/* component파일 -> Banner파일  이미지 4개를 가져오는데 공공데이터를 이용해서 이미지4개+장소명4개 통신 */}
                    <Banner />
                    <PlanBoard />
                    <PlanBoard2 />
                    <ContainerBelt/>
                    <PopularTrip/>
                    <Footer/>
                  </div>
                </div>
              </div>
            }
            // 다른페이지 이동 로직 (서버X)
          ></Route>
          <Route
            path="/login/oauth2/callback/kakao"
            element={<LoginHandler />}
          />
          <Route path="/signup1" element={<SignUpPage1 />}></Route>
          <Route path="/signup2" element={<SignUpPage2 />}></Route>
          <Route path="/signup3" element={<SignUpPage3 />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/loginSuccess" element={<h1>로그인 성공</h1>}></Route>
          <Route path="/loginFailure" element={<h1>로그인 실패</h1>}></Route>
          <Route path="/MyTravelType" element={<MyTravelType/>}></Route>
        </Routes>
      </Wrapper>
    </div>
  );
}
//서버 통신X
export function NavBar() {
  const location = useLocation(); // 현재 위치 추적
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 50) {
        console.log("Setting isScrolled to true");
        setIsScrolled(true);
      } else {
        console.log("Setting isScrolled to false");
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMainPage = location.pathname === "/"; // 메인 페이지 여부 확인
  const topMenuClass = `topMenu ${isScrolled ? "scrolled" : ""}`;
  // 스크롤 상태 및 현재 페이지에 따른 클래스 이름 결정
  const linkClass = `menuItem linkItem${isMainPage ? " mainPage" : ""}${
    isScrolled ? " scrolled" : ""
  }`;

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
