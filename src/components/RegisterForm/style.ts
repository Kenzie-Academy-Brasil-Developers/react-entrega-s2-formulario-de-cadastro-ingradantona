import styled from "styled-components";

export const Section = styled.section`
    width: calc(100vw - 25px);
    padding: 20px 0;
    max-width: 370px;
    box-sizing: border-box;
    background-color: var(--grey-3);
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: var(--grey-0);
        font-weight: 700px;
        font-size: 16px;
    }
    span {
        font-size: 12px;
        color: var(--grey-1);
        font-weight: 600;
    }
`

export const Form = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    gap: 15px;


    label{
        color: var(--grey-0);
        font-size: 14px;
    }

    input, select{
        width: calc(100vw - 70px);
        padding-left: 10px;
        max-width: 350px;
        height: 40px;
        border-radius: 4px;
        background-color: var(--grey-2);
    }
    select, option{
        color: var(--grey-1);
        padding-left: 10px;
        font-size: 16px;
        border: none;
    }
    input::placeholder, option {
        color: var(--grey-1);
        padding-left: 10px;
        font-size: 16px;
    }
    input:focus, select:focus{
        border: 1px solid var(--grey-0) !important;
        outline: none;
        background-color: var(--grey-2) !important;
    }
    button {
        background-color: var(--color-primary-negative);
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