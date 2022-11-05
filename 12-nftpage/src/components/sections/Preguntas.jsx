import styled from "styled-components";
import { Accordion } from "../Accordion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export function Preguntas() {
  
  return (
    <Section id="preguntas">
      <Title>Preguntas</Title>
      <Container>
        <Box>
          <Accordion title="¿Olvidaste tu contraseña?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordion>
          <Accordion title="¿Dónde se acepta pagar con Ligo?">
          Las tarjetas Ligo son Visa, así que en cualquier lugar que acepten pagos con Visa tu tarjeta Ligo será aceptada. Además, desde nuestra App puedes realizar pagos QR. Puedes realizar compras en comercios físicos o virtuales, peruanos o de todo el mundo.
          </Accordion>
          <Accordion title="¿Qué es una Tarjeta Ligo Virtual?">
          La forma como se hacemos las cosas viene cambiando, la forma en como pedimos un taxi, ordenamos algo de comer o accedemos a un servicio de salud. 
          </Accordion>
        </Box>
        <Box>
          <Accordion title="¿Olvidaste tu contraseña?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordion>
          <Accordion title="¿Dónde se acepta pagar con Ligo?">
          Las tarjetas Ligo son Visa, así que en cualquier lugar que acepten pagos con Visa tu tarjeta Ligo será aceptada. Además, desde nuestra App puedes realizar pagos QR. Puedes realizar compras en comercios físicos o virtuales, peruanos o de todo el mundo.
          </Accordion>
          <Accordion title="¿Qué es una Tarjeta Ligo Virtual?">
          La forma como se hacemos las cosas viene cambiando, la forma en como pedimos un taxi, ordenamos algo de comer o accedemos a un servicio de salud. 
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
}
const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;
const Box = styled.div`
  width: 45%;
  @media (max-width: 64em) {
    align-self: center;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;
