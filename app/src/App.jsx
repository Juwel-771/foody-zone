import styled from "styled-components"

const Container = styled.div `
  max-width: 1280px;
  margin: 0 auto;
`
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search{
    input{
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0px 10px;
    }
  }

`

const App = () => {
  return(
     <Container>
      <TopContainer>
        <div className="logo">
          {/* <img src="/logo.png" alt="" /> */}
          <p>HunGer Me</p>
        </div>

        <div className="search">
          <input placeholder="Search Food"/>
        </div>
      </TopContainer>
    </Container>
  )
};

export default App;
