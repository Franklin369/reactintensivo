import styled, { keyframes } from "styled-components";
import Vector from "./icons/Vector";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect,useRef } from "react";
export function DrawSvg() {
    const ref = useRef(null);
    const ballRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(()=>{
        let element = ref.current;

        let svg = document.getElementsByClassName("svg-path")[0];

        const length = svg.getTotalLength();

        //comenzar a posicionar el dibujo svg
        svg.style.strokeDasharray = length;

        // Ocultar svg antes de comenzar a desplazarse
        svg.style.strokeDashoffset = length;


        let recorrido = gsap.timeline({
            scrollTrigger:{
                trigger:element,
                start:"top center",
                end:"bottom bottom",
                onUpdate:(self)=>{
                    const draw = length*self.progress;
                    svg.style.strokeDashoffset=length-draw;
                },
                onToggle: self=>{
                    if(self.isActive){
                        ballRef.current.style.display="none"
                    }else{
                        ballRef.current.style.display="inline-block"  
                    }
                }
            }
        })
        return ()=>{
            if(recorrido) recorrido.kill();
        }
        
    },[])

  return (
    <>
      <Ball ref={ballRef}/>
      <VectorContainer ref={ref}>
        <Vector />
      </VectorContainer>
    </>
  );
}
const Bounce = keyframes`
    from {  transform: translateX(-50%) scale(0.5);   }
    to {  transform: translateX(-50%) scale(1);   }

`;
const Ball = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${(props) => props.theme.text};
  border-radius: 50%;
  animation: ${Bounce} 0.5s linear infinite alternate;
  @media (max-width: 48em) {
    left: 1rem;
  }
`;
const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;
  svg {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 48em) {
    left: 1rem;
  }
`;
