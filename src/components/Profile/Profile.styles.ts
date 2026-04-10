import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${Colors.Letter};
  font-family: ${Fonts.ROBOTO};
  @media (min-width: 768px){
    height: 100vh;
  }
  
`;

export const Top = styled.div`
  flex: 4;
  display: flex;
  padding: 3rem 5rem 0 5rem;
  @media (max-width: 767px){
    flex-direction: column;
    padding: 3rem 1rem 0 1rem;
  }
`;

export const Center = styled.div`
  flex: 3;
  display: flex;
  padding: 0 5rem;
  @media (max-width: 767px){
    flex-direction: column-reverse;
    padding: 1rem;
  }
`;

export const Bottom = styled.div`
  flex: 1;
  padding: 0 0 0 5rem;
  display: flex;
  @media (max-width: 767px){
    padding: 1.5rem;
    background-color: ${Colors.DOT2};
  }
`;

export const Left = styled.div`
  flex: 2;
  @media (max-width: 767px){
    padding-bottom: 2rem;
  }
`;

export const Logo = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font-family: ${Fonts.MontserratAlternates};
  font-size: 2.5rem;
  margin: 1rem 0 0 1rem;
`;

export const Right = styled.div`
  flex: 3;
`;

export const Subtitle = styled(Title)`
  font-size: 1.25rem;
`;

export const WorkingExperience = styled.div`
  font-size: 1rem;
`;

export const JobDescription = styled.div`
  margin: 1rem 1rem;
`;

export const Position = styled.div`
  font-size: 1rem;
  padding: 0.25rem 0 0.25rem 1rem;
  font-weight: 700;
`;

export const Company = styled.div`
  font-style: "italic";
  padding-left: 2.5rem;
  font-style: italic;
`;

export const Skills = styled.div`
  margin: 2rem 0 0 1rem;
  font-size: 1.25rem;
  line-height: 2.25rem;
  font-family: ${Fonts.ROBOTO};
  width: 60%;
  @media (max-width: 767px){
    width: 90%;
    font-size: 1rem;
  }
`;

export const EducationalBackground = styled(WorkingExperience)`
@media(max-width: 767px){
  padding-bottom: 1.5rem;
}
`;

export const Education = styled(JobDescription)`
`;

export const Major = styled(Position)`
`;

export const School = styled(Company)`
`;

export const BottomLeft = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  @media(max-width: 767px){
    width: 80%;
  }
  @media (min-width: 768px) and (max-width: 1024px){
    width: 92%;
    padding-top: 1rem;
  }
`;

export const Icon_language = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  padding-right: 1rem;
`;

export const BottomRight = styled.div`
  width: 5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${Colors.DOT2};
   @media(max-width: 767px){
    flex-direction: row;
    width: 20%;
  }
  @media (min-width: 768px) and (max-width: 1024px){
    width: 8%;
    padding-top: 1rem;
  }
`;

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`;
