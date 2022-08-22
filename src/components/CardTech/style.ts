import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--grey-4);
    width: 100%;
    height: 50px;
    border-radius: 4px;
    padding: 0 10px;
    transition: 0.3s;
    cursor: pointer;

    & > h4 {
        color: var(--grey-0);
        font-size: 14px;
        font-weight: 700;
    }

    & > span {
        color: var(--grey-1);
        font-size: 12px;
    }

    &:hover {
        background-color: var(--grey-2);
        transition: 0.3s;
    }

`