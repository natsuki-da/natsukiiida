import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.styles";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 20rem;
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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bottom = styled.div`
  height: 10%;
  display: flex;
  justify-content: end;
  margin: 0 5%;
`;

export const BttnContainer = styled.div`
  display: flex;
  height: 5rem;
`;

export const Button = styled.div`
  font-family: ${Fonts.MontserratAlternates};
  font-size: 2rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  color: ${Colors.Letter};
`;