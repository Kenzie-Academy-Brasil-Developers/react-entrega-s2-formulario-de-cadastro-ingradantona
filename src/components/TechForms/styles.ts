import styled from "styled-components";

interface IButton {
    color: string,
    width: number,
}

export const Form = styled.form`
    width: 100%;
    height: calc(100% - 40px);
    box-sizing: border-box;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    label {
        color: var(--grey-0);
        font-size: 12px;
    }

    input, select{
        width: 100%;
        height: 40px;
        border-radius: 4px;
        background-color: var(--grey-2);
        padding-left: 10px;
        border: 1px solid transparent;
    }
    input:focus, select:focus{
        border: 1px solid var(--grey-0);
        outline: none;
        background-color: var(--grey-2);
    }
    & > button {
        background-color: var(--color-primary);
        width: 100%;
        height: 40px;
        border-radius: 4px;
        color: var(--grey-0);
        font-weight: 500;
        margin-top: 15px;
        cursor: pointer;
        font-size: 14px;
    }
    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }
`
export const Button = styled.button<IButton>`
    background-color: ${(props) => props.color};
    width: ${(props) => props.width}%;
    height: 40px;
    border-radius: 4px;
    color: var(--grey-0);
    font-weight: 500;
    margin-top: 15px;
    cursor: pointer;
    font-size: 14px;
`