import styled, { keyframes } from "styled-components";

import imgreact from "../../assets/react.png";
import { lazy, Suspense } from "react";
import { Loading } from "../../components/Loading";
const TypeWriterText = lazy(() => import("../TypeWriterText"));
const CoverVideo= lazy(()=>import("../CoverVideo"))

export function Home() {
  return (
    <Section id="home">
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <TypeWriterText />
          </Suspense>
        </Box>
        <Box>
        <Suspense fallback={<Loading />}>
        <CoverVideo />
          </Suspense>
        
        </Box>
        <Round>
          <img src={imgreact} width={500} height={400} alt="React" />
        </Round>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;
const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const rotate = keyframes`
  100%{
    transform:rotate(1turn);
  }
`;
const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 7rem;
  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }
  @media (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
  }
  @media (max-width: 48em) {
    right: 1.5rem;
  }
`;
