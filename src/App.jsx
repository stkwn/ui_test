import styled from "styled-components";
import Login from "./components/Login/Login";

function App() {
  return (
    <AppWrapper>
      <Login />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-100);
`