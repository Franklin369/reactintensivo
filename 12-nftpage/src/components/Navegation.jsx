import { useState } from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
export function Navegation() {
  const [click, setClick] = useState(false);
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setClick(!click);
  };
  return (
    <Section id="navigation">
      <NavBar>
        <Logo />
        <HamburgerMenu
          click={click}
          onClick={() => setClick(!click)}
        ></HamburgerMenu>
        <Menu click={click}>
          <MenuItem onClick={() => scrollTo("home")}> Home</MenuItem>
          <MenuItem onClick={() => scrollTo("about")}> Acerca de</MenuItem>
          <MenuItem onClick={() => scrollTo("roadmap")}> RoadMap</MenuItem>
          <MenuItem onClick={() => scrollTo("cards")}> Cards</MenuItem>
          <MenuItem onClick={() => scrollTo("team")}> Equipo</MenuItem>
          <MenuItem onClick={() => scrollTo("preguntas")}> Preguntas</MenuItem>
        </Menu>
      </NavBar>
    </Section>
  );
}

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  @media (max-width: 64em) {
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    z-index: 100;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
    backdrop-filter: blur(2px);
    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(1000%)"};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;
    touch-action: none;
  }
`;
const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontlg};
  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
  @media (max-width: 64em) {
    margin: 1rem 0;
    font-size: ${(props) => props.theme.fontmd};
    &::after {
      display: none;
    }
  }
`;
const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background: ${(props) => props.theme.text};
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  @media (max-width: 64em) {
    display: flex;
  }
  &::after,
  &::before {
    content: " ";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }
  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }
  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;
