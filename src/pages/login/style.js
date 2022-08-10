import styled from "styled-components";

export const Main = styled.main`
   background-color: var(--grey-4);
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 10px;

   & > h1 {
    color: var(--color-primary);
    font-weight: 800;
    font-size: 18px;
   }
`