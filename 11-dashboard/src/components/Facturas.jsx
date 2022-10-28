import styled from "styled-components";
import { cardShadow, hoverEffect } from "../utils/utils";
import img1 from "../assets/a4.jpg"
import img2 from "../assets/a5.jpg"
export function Facturas() {
  return (<InvoicesContainer>
    <CardContent>
        <Invoice>
            <Info>
                <Avatar>
                    <img src={img1}/>
                </Avatar>
                <TextContainer>
                    <Title>Alexander Williams</Title>
                    <SubTitle>ABC Holdings</SubTitle>
                </TextContainer>
            </Info>
            <Container>
            <Price>$ 1,200.87</Price>
            </Container>
        </Invoice>
        <Invoice>
            <Info>
                <Avatar>
                    <img src={img2}/>
                </Avatar>
                <TextContainer>
                    <Title>Frank Williams</Title>
                    <SubTitle>ABC Holdings</SubTitle>
                </TextContainer>
            </Info>
            <Container>
            <Price>$ 5,200.87</Price>
            </Container>
        </Invoice>
    </CardContent>
  </InvoicesContainer>);
}
const InvoicesContainer = styled.div`
  width: 35rem;
  border-radius: 1rem;
  margin-top: 1rem;
  background-color: white;
  height: 140%;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const CardContent = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 2rem 0;
  }
`;
const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
const Avatar = styled.div`
  img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 3.5rem;
  }
`;
const TextContainer = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h4``;
const SubTitle = styled.h5`
  font-weight: 400;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }
`;
const Price = styled.div``;