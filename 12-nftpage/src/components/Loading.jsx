import styled, { keyframes } from "styled-components";
export function Loading() {
  return (
    <Loader>
      <Spinner>
        <div />
        <div />
        <div />
        <div />
      </Spinner>
    </Loader>
  );
}
const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 150;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;
const Spinner = styled.div`
  margin-top: 1rem;
  border: 4px solid #222;
  border-radius: 50%;
  border-top: 4px solid #999;
  width: 3rem;
  height: 3rem;
  -webkit-animation: ${spin} 1s linear infinite; /* Safari */
  animation: ${spin} 1s linear infinite;
`;
