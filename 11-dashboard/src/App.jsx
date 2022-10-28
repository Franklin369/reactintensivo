import "./App.css";
import styled from "styled-components";
import { MyRoutes } from "./routers/routes";
function App() {
  return (
    <Container>
      <MyRoutes />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction:column;
    
  }
`;
