import "./Header.css";
function TextInput() {
  return (
    <div>
      <Input />
    </div>
  );
}
function Input() {
  return (
    <div>
      <h3 className="header-Name"
      style={{fontFamily:"Pretendard"}}>당신을 위한 여행 계획 메이트</h3>
      <div
        className="input-container"
        style={{ display: "flex", alignItems: "center" }}
      >
        <input
          className="input-Text"
          type="text"
          placeholder="여행지나 숙소를 검색해보세요."
          name="main-search"
        ></input>
        <button className="search-button"></button>
      </div>
    </div>
  );
}

export default TextInput;
