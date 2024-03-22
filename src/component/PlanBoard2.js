import "./containercenter.css";
function PlanBoard2() {
  return (
    <div className="planeContainer">
      <div className="contentWrapper" style={{ marginTop: "" }}>
        <div className="headerSection">
          <div className="headerFlexContainer">
            <div className="text unbounded-font" style={{ marginTop: "-30%" }}>
              <div>WHAT'S</div>
              <div>MY TRAVEL TYPE?</div>
            </div>
            <MbtiCard />
          </div>
          <div className="hrSvgContainer" style={{ marginRight: "25%",marginTop:"-40%" }}>
            <hr
              style={{
                border: "solid 1px #3B3B3B",
                position: "relative",
                width: "45vw",
              }}
            ></hr>
            <svg
              width="58"
              height="54"
              viewBox="0 0 58 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              // Add margin to separate from the hr
            >
              <path
                d="M52.4712 33.2764L12.0542 43.7178L5.07544 31.6303L9.00646 30.8258L13.2095 34.5529L25.4715 31.4293L15.3841 13.9573L20.414 12.5185L37.5603 28.2593L50.3253 24.9918C51.2947 24.7252 52.2222 24.7879 53.1079 25.18C53.9936 25.5722 54.6797 26.1895 55.1661 27.032C55.864 28.2407 55.9299 29.4969 55.3639 30.8004C54.7978 32.104 53.8336 32.9293 52.4712 33.2764Z"
                fill="#3B3B3B"
              />
            </svg>
          </div>
        </div>

        <div className="contentText ">
          여행 장소를 정하기 힘들다면 mbti 성격 유형에 따라 여행지를
          선택해보는것이 어떤가요?
        </div>
        <div className="contentText ">
          나의 여행 타입을 알아보고 목적지를 선택해보세요!
        </div>

        <button className="btnMakeBoard">
          <svg
            style={{ marginRight: "1.0417vw" }}
            width="1.3542vw"
            height="2.0313vw"
            viewBox="0 0 26 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.71429 37.05C2.69286 37.05 1.81845 36.6681 1.09107 35.9044C0.363691 35.1406 0 34.2225 0 33.15V11.7C0 10.6275 0.363691 9.70938 1.09107 8.94563C1.81845 8.18188 2.69286 7.8 3.71429 7.8H7.42857V3.9C7.42857 2.8275 7.79226 1.90938 8.51964 1.14562C9.24702 0.381875 10.1214 0 11.1429 0H14.8571C15.8786 0 16.753 0.381875 17.4804 1.14562C18.2077 1.90938 18.5714 2.8275 18.5714 3.9V7.8H22.2857C23.3071 7.8 24.1815 8.18188 24.9089 8.94563C25.6363 9.70938 26 10.6275 26 11.7V33.15C26 34.2225 25.6363 35.1406 24.9089 35.9044C24.1815 36.6681 23.3071 37.05 22.2857 37.05C22.2857 37.6025 22.1077 38.0656 21.7518 38.4394C21.3958 38.8131 20.9548 39 20.4286 39C19.9024 39 19.4613 38.8131 19.1054 38.4394C18.7494 38.0656 18.5714 37.6025 18.5714 37.05H7.42857C7.42857 37.6025 7.2506 38.0656 6.89464 38.4394C6.53869 38.8131 6.09762 39 5.57143 39C5.04524 39 4.60417 38.8131 4.24821 38.4394C3.89226 38.0656 3.71429 37.6025 3.71429 37.05ZM3.71429 33.15H22.2857V11.7H3.71429V33.15ZM7.42857 31.2H11.1429V13.65H7.42857V31.2ZM14.8571 31.2H18.5714V13.65H14.8571V31.2ZM11.1429 7.8H14.8571V3.9H11.1429V7.8Z"
              fill="white"
            />
          </svg>
          나의 여행 타입 알아보기
        </button>
      </div>
    </div>
  );
}

function MbtiCard() {
  return (
    <div className="MbtiCardContainer">
      <div>FIND TRAVEL TYPE</div>
    </div>
  );
}
export default PlanBoard2;
