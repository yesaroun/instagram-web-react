// 전체 css 리셋 파일 / globalstyle을 사용한다.
import { createGlobalStyle } from "styled-components";

/* npm i styles-reset */
import reset from "styles-reset";

// 전역으로 쓰기 위해서 export 사용
export const lightTheme = {
  fontColor: "rgb(38, 38, 38)",
  bgColor: "#fafafa",
  borderColor: "black",
};

export const darkTheme = {
  fontColor: "#fafafa",
  bgColor: "rgb(38, 38, 38)",
};

export const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  input{
    all:unset;
  }
  body {
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.bgColor};
  }
`;
