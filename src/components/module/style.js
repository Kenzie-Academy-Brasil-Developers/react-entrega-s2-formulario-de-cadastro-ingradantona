import styled from "styled-components";

export const Div = styled.div`
    position: fixed;
    top: 25px;
    left: 84vw;
    width: 15vw;
    min-width: 250px;
    height: 70px;
    background-color: var(--grey-2);
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
    gap: 10px;

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
        position: fixed;
        top: 30px;
        right: 30px;
        border: none;
        background-color: transparent;
        color: var(--grey-1);
    }

    & > div {

    }
`

export const Line = styled.div`
    position: fixed;
    top: 90px;
    left: 84vw;
    height: 6px;
    width: 10vw;
    border-radius: 0 0 0 4px;
    min-width: 200px;
    background-color: ${(props) => props.colormessage};
`