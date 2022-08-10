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
   gap: 10px;
   box-sizing: border-box;

   & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: calc(100vw - 70px);
      max-width: 750px;
   }

   h1 {
    color: var(--color-primary);
    font-weight: 800;
    font-size: 18px;
   }

   button {
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

export const Section = styled.section`
   width: 100vw;
   height: 150px;
   box-sizing: border-box;
   border: 1px solid var(--grey-3);
   border-left: none;
   border-right: none;
   display: flex;
   align-items: center;
   justify-content: center;


   & > div{
      justify-content: space-between;
      width: calc(100vw - 70px);
      max-width: 750px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
      color: var(--grey-0);
   }

   @media screen and (min-width: 900px){
      & > div{
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
   }
   }
`

export const Loading = styled.div`
   margin: 20px;
   box-sizing: border-box;
   height: 50px !important;
   width: 50px !important;
   border-radius: 50%;
   background-image: conic-gradient(var(--grey-4), var(--grey-3), var(--color-primary-negative));
   animation-name: spin;
   animation-duration: 3s;

   @keyframes spin {
      from{
         transform: rotate(0deg);
      }
      to{
         transform: rotate(360deg);
      }
   }
`