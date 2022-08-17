import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: calc(100vw - 70px);
    max-width: 750px;

    & > :first-child{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--grey-0);

        & > button {
            height: 40px;
            width: 40px;
            font-size: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            background-color: var(--grey-3);
            color: var(--grey-0);
            border-radius: 4px;
            cursor: pointer;
        }        
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    & > button {
        background-color: transparent;
        height: 150px;
        width: 150px;

        & > svg {
            height: 150px;
            width: 150px;
            fill: var(--grey-3);
            cursor: pointer;
        }
    }
    
    p {
        color: var(--grey-0);
        text-align: center;
        width: 70vw;
    }
`

export const Ul = styled.ul`
    width: calc(100vw - 70px);
    max-width: 750px;
    min-height: 400px;
    padding: 20px 10px;
    box-sizing: border-box;
    background-color: var(--grey-3);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`