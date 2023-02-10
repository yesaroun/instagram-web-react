import { makeVar } from "@apollo/client";

/*
npm i @apollo/client
*/

export const isLoggedInVar = makeVar(false);  // 괄호 안은 기본값, 변수명 뒤에 Var 붙이는게 규칙
export const darkModeVar = makeVar(false);



