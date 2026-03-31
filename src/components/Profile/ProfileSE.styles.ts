import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.styles";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  color: ${Colors.Letter};
  font-family: ${Fonts.ROBOTO};
`;

export const Top = styled.div`
  flex: 4;
  display: flex;
  padding: 3rem 5rem 0 5rem;
`;

export const Center = styled.div`
  flex: 3;
  display: flex;
  padding: 0 5rem;
`;

export const Bottom = styled.div`
  flex: 1;
  padding: 0 0 0 5rem;
  display: flex;
`;

export const Left = styled.div`
  flex: 2;
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
`;

export const EducationalBackground = styled(WorkingExperience)`
`;

export const Education = styled(JobDescription)`
`;

export const Major = styled(Position)`
`;

export const School = styled(Company)`
`;

export const BottomLeft = styled.div`
  width: 97%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Icon_language = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  padding-right: 1rem;
`;

export const BottomRight = styled.div`
  width: 3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${Colors.DOT2};
`;

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`;



















// import styled from "styled-components";
// import { Colors, Fonts } from "../../global/Global.styles";


// export const Container = styled.div`
//   display: flex;
//   color: ${Colors.Letter};
//   font-family: ${Fonts.ROBOTO};
// `;

// export const Left = styled.div`
// flex: 2;
// margin: 3rem 0  0 5rem;
// `;

// export const TopLeft = styled.div`
//   height: 60%;
// `;

// export const Title = styled.div`
//   font-family: ${Fonts.MontserratAlternates};
//   font-size: 2.5rem;
//   margin: 1rem 0 0 1rem;
// `;

// export const CenterLeft = styled.div`
//   height: 40%;
//   width: 60%;
// `;

// export const Skills = styled.div`
//   margin: 2rem 0 0 1rem;
//   font-size: 1.25rem;
//   line-height: 2.25rem;
//   font-family: ${Fonts.ROBOTO};
// `;

// export const Subtitle = styled(Title)`
//   font-size: 1.25rem;
// `;

// export const BottomLeft = styled.div`
//   height: 5rem;
//   display: flex;
//   align-items: center;
// `;

// export const Icon = styled.img`
//   width: 1.5rem;
//   height: 1.5rem;
//   padding-right: 1rem;
// `;

// export const Right = styled.div`
//   flex: 3;
//   height: 45rem;
//   margin: 3rem 5rem 0  0;
// `;

// export const TopRight = styled.div`
//   height: 20rem;
//   overflow-x: auto;
//   margin: 0 0 8rem 0;
// `;

// export const WorkingExperience = styled.div`
//   font-size: 1rem;
// `;

// export const JobDescription = styled.div`
//   margin: 1rem 1rem;
// `;

// export const Position = styled.div`
//   font-size: 1rem;
//   padding: 0.25rem 0 0.25rem 1rem;
//   font-weight: 700;
// `;

// export const Company = styled.div`
//   font-style: "italic";
//   padding-left: 2.5rem;
//   font-style: italic;
// `;

// export const CompanyJP = styled.div`
//   padding-left: 0.25rem 0 0.25rem 1rem;
//   font-weight: 700;
// `;

// export const PositionJP = styled.div`
//   font-size: 1rem;
//   padding-left: 2.5rem;
// `;

// export const Task = styled.div`
//   ul {
//     margin-top: 0.5rem;
//   }
//   li {
//      padding: 0.25rem 0;
//   }
// `;

// export const BottomRight = styled.div`
//   height: 18rem;
// `;

// export const EducationalBackground = styled(WorkingExperience)`
// `;

// export const Education = styled(JobDescription)`
// `;

// export const Major = styled(Position)`
// `;

// export const School = styled(Company)`
// `;
