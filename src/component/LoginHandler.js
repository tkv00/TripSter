import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const LoginHandler = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_BACKEND_URL}/api/auth/kakao?code=${code}`,
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        });
        console.log(response);
        // 여기서 받은 데이터(예: 사용자 토큰)를 처리하고,
        // 필요한 경우 로컬 스토리지 등에 저장할 수 있습니다.
        navigate("/loginSuccess"); // 로그인 성공 후 이동할 경로
      } catch (error) {
        console.error('로그인 실패:', error);
        console.error('로그인 실패 이유:', error.response ? error.response.data : '오류 응답 없음');
        navigate("/loginFailure"); // 로그인 실패 시 이동할 경로
      }
    };
    kakaoLogin();
  }, [navigate, code]); // 의존성 배열에 'navigate'와 'code' 추가

  return (
    <div className="LoginHandler">
      <div className="notice">
        <p>로그인 중입니다. 잠시만 기다려주세요.</p>
        <div className="spinner"></div> {/* 스피너 구현은 CSS 또는 다른 라이브러리를 통해 해야 함 */}
      </div>
    </div>
  );
};

export default LoginHandler;
