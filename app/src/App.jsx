import styled from "styled-components"

const MainContainer = styled.div ``
const TopContainer = styled.div ``
const App = () => {
  return(
     <MainContainer>
      <TopContainer>
        <div className="logo">
          {/* <img src="/logo.png" alt="" /> */}
          <p>HunGer Me</p>
        </div>

        <div className="search">
          <input placeholder="Search Food"/>
        </div>
      </TopContainer>
    </MainContainer>
  )
};

export default App;
