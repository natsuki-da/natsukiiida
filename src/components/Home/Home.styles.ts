import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.styles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  @media (min-height: 768px){
    height: 100vh;
  }
  @media (max-width: 767px){
    flex-direction: column;
    align-itemts: stretch;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px){
    height: auto;
    min-height: auto;
    justify-content: flex-start;
    padding-top: 5rem;
  }
  @media (min-width: 768px){
    flex: 1;
  }
`;

export const Img = styled.img`
  width: 20rem;
  @media (max-width: 767px){
    width: 60%;
  }
`;

export const Profile = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Colors.Letter}
`;

export const Name = styled.div`
  font-family: ${Fonts.MontserratAlternates};
  font-size: 2rem;
  line-height: 5rem;
  padding: 1.5rem 0;
`;

export const Occupation = styled.div`
  font-family: ${Fonts.ROBOTO};
  font-size: 1.25rem;
  line-height: 2rem;
`;

export const Nationality = styled(Occupation)`
`;

export const Description = styled(Occupation)`
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
   @media (max-width: 767px){
    height: auto;
    min-height: auto;
    padding: 5rem 0;
  }  
  @media (min-width: 768px){
   flex: 1;
  }
`;

export const Button = styled.button`
  font-family: ${Fonts.MontserratAlternates};
  font-size: 1.5rem;
  border: none; 
  background-color: #c8c8c8;
  transition: 0.2s;
  a { 
  color: ${Colors.Letter}; 
  text-decoration: none; 
  }
`

export const Dot1 = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 68% 49% 67% 46% / 47% 39% 67% 77%;
  background-color: #c8c8c8;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: 0.2s;
  &:hover {
    background: ${Colors.DOT1};
    cursor: pointer;
  }
  &:hover button {
    background: ${Colors.DOT1};
    color: ${Colors.DOT1};
    transition: 0.2s;
  }
  &:hover a {
  color: #c8c8c8;
  transition: 0.2s;
  }
`;

export const Dot2 = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius:  49% 38% 38% 43% / 57% 54% 71% 45%;
  background-color: #c8c8c8;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  &:hover {
    background: ${Colors.DOT2};
    cursor: pointer;
  }
`;

export const Dot3 = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius:  23% 77% 70% 30% / 30% 61% 39% 70%;
  background-color: #c8c8c8;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: 0.2s;
  &:hover {
    background: ${Colors.DOT3};
    cursor: pointer;
  }
  &:hover button {
    background-color: ${Colors.DOT3}; 
    transition: 0.2s; 
  };
  &: hover a {
  color: #c8c8c8;
  transition: 0.2s;
  }
`;