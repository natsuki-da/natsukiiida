import styled from "styled-components"

export const Colors = {
    DOT1: "#e17a7a",
    DOT2: "#d6c0c0",
    DOT3: "#5c7290",
    Letter: "#808080"
}

export enum Fonts {
    MontserratAlternates = " 'Montserrat Alternates' , sans-serif",
    ROBOTO = "Roboto, sans-serif",
    NOTO_SANS_JP = "'Noto Sans JP', sans-serif;",
}

export const Logo = styled.div`
display: flex;
.dot1 {
  background: ${Colors.DOT1};
  width: 7rem;
  height: 7rem;
  border-radius: 68% 49% 67% 46% / 47% 39% 67% 77%;
}
.dot2 {
    background: ${Colors.DOT2};
    width: 7rem;
    height: 7rem;
    border-radius:  49% 38% 38% 43% / 57% 54% 71% 45%;
}
.dot3 {
    background: ${Colors.DOT3};
    width: 7rem;
    height: 7rem;
    border-radius:  23% 77% 70% 30% / 30% 61% 39% 70%;
}
`
