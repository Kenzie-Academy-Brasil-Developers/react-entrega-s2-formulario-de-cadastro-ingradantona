import styled from "styled-components";

export const Section = styled.section`
    width: calc(100vw - 25px);
    height: 70vh;
    max-height: 500px;
    max-width: 370px;
    box-sizing: border-box;
    background-color: var(--grey-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    & > h2 {
        color: var(--grey-0);
        font-weight: 700px;
        font-size: 16px;
    }
     span {
        font-size: 12px;
        color: var(--grey-1);
        font-weight: 600;
    }
    & > a {
        background-color: var(--grey-1);
        width: calc(100vw - 70px);
        max-width: 350px;
        height: 40px;
        border-radius: 4px;
        color: var(--grey-0);
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    label{
        color: var(--grey-0);
        font-size: 14px;
    }

    input{
        width: calc(100vw - 70px);
        max-width: 350px;
        height: 40px;
        border-radius: 4px;
        background-color: var(--grey-2);
        padding-left: 10px;
    }
    input:focus{
        border: 1px solid var(--grey-0);
        outline: none;
        background-color: var(--grey-2);
    }
    button {
        background-color: var(--color-primary);
        width: calc(100vw - 70px);
        max-width: 350px;
        height: 40px;
        border-radius: 4px;
        color: var(--grey-0);
        font-weight: 500;
        margin-top: 15px;
        cursor: pointer;
    }
`