import styled from "styled-components";

export const Main = styled.main`
   background-color: var(--grey-4);
   width: 100vw;
   max-width: 100vw;
   min-height: 100vh;
   padding: 20px 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 10px;
   box-sizing: border-box;

   & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: calc(100vw - 70px);
      max-width: 350px;
   }

   h1 {
    color: var(--color-primary);
    font-weight: 800;
    font-size: 18px;
   }

   a {
      background-color: var(--grey-3);
      width: 80px;
      height: 30px;
      border-radius: 4px;
      color: var(--grey-0);
      font-weight: 600;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
   }
`