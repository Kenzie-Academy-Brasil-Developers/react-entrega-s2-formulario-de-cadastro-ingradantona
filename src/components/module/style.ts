import styled, {css , keyframes} from "styled-components";

interface IContainerProps {
    isLeave: boolean
  }

const zoomInAnimation = keyframes`
    0% {
        display: none;
        transform: scale(0.8)
    }
    95%{
        transform: scale(1.1)
    }
    100%{
        transform: scale(1)
    }
`

const zoomOutAnimatio = keyframes`
  from {
    transform: scale(1)
  }
  to {
    transform: scale(0.6);
    display: none;
  }
`;

export const Div = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div<IContainerProps>`
    width: calc(100vw - 70px);
    max-width: 380px;
    height: 50vh;
    max-height: 340px;
    background-color: var(--grey-3);
    border-radius: 4px;
    ${({ isLeave }) =>
    css`
      animation: ${isLeave ? zoomOutAnimatio : zoomInAnimation}
        0.5s;
    `}
    animation-fill-mode: forwards;

    & > div {
        background-color: var(--grey-2);
        padding: 0 15px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 4px 4px 0 0 ;

        & > h2 {
            color: var(--grey-0);
            font-size: 14px;
            font-weight: 700;
        }

        & > button {
            border: none;
            background-color: transparent;
            color: var(--grey-1);
            cursor: pointer;
        }

    }
`