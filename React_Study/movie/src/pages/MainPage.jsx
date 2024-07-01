import SearchIcon from "@mui/icons-material/Search";
import CameraRollSharpIcon from "@mui/icons-material/CameraRollSharp";
import styled from "styled-components";

const MainWrapper = styled.div`
  .welcome,
  .searchTxt,
  .searchCont {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }

  .welcome {
    background-color: #000000;
    height: 300px;
  }

  .searchTxt {
    height: 130px;
  }

  .searchCont {
    input {
      border-radius: 30px;
      height: 30px;
      width: 300px;
      margin: 0px 20px;
    }
    button {
      border-radius: 50px;
      height: 30px;
      width: 30px;
      background-color: orange;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

function MainPage() {
  return (
    <MainWrapper>
      <div className="welcome">
        <h2>환영합니다</h2>
      </div>
      <div className="search">
        <div className="searchTxt">
          <h1>
            <CameraRollSharpIcon /> Find your movies !
          </h1>
        </div>
        <div className="searchCont">
          <input type="text" />
          <button>
            <SearchIcon fontSize="small" />
          </button>
        </div>
      </div>
    </MainWrapper>
  );
}

export default MainPage;
