import styled, {css, keyframes} from "styled-components";

const translateXAnimationFrom = keyframes`
    0% {
        background: transparent;
        transform: translateX(120%);
    }
    95%{
        transform: translateX(-20px);
    }
    100%{
        transform: translateX(0);
    }
`

const translateXAnimationLeave = keyframes`
  from {
    transform: translateX(0) ;
  }
  to {
    background: transparent;
    transform: translateX(120%);
  }
`;

export const Container = styled.div`
    position: relative;
    margin: 25px;
    width: 20vw;
    min-width: 250px;
    height: 70px;
    background-color: var(--grey-2);
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
    gap: 10px;

    ${({ isLeave }) =>
    css`
      animation: ${isLeave ? translateXAnimationLeave : translateXAnimationFrom}
        0.8s;
    `}
  animation-fill-mode: forwards;

    & > svg {
        height: 30px;
        width: 30px;
    }

    & > p {
        font-size: 14px;
        font-weight: 700;
        color: var(--grey-0);
    }
    & > button {
        position: absolute;
        top: 5px;
        right: 10px;
        border: none;
        background-color: transparent;
        color: var(--grey-1);
        cursor: pointer;
    }
`
export const Line = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 6px;
    width: 10vw;
    border-radius: 0 0 0 4px;
    min-width: 200px;
    background-color: ${(props) => props.colormessage};
`