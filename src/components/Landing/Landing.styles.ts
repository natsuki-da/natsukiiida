import styled from "styled-components";
import { Fonts } from "../../global/Global.styles";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`
export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LandingTitle = styled.div`
  font-family: ${Fonts.MontserratAlternates};
  font-size: 5rem;
  font-weight: 300;
  letter-spacing: 1rem;
  color: #808080;
  position: absolute;
  @media (max-width: 1024px){
    font-size: 4rem;
  }
  @media (max-width: 768px){
    font-size: 3rem;
  }
`