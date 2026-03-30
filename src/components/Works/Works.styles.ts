import styled from "styled-components";
import { Colors } from "../../global/Global.styles";

export const Container = styled.div`
  width: 100%;  
  display: flex;
  //background-color: ${Colors.Letter};
  //padding: 0 auto;
`;

export const ButtonContainer = styled.div`
  width: 10rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    border: none;
    background-color: transparent;
  }
`;

export const SlidesContainer = styled.div`
  width: 80%;
  height: 50rem;
  background-color: ${Colors.DOT2};
`;