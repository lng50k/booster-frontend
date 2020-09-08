import styled from "styled-components"

export const Input = styled.input`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "#6c7ae0" : "white"};
    color: ${props => props.primary ? "white" : "#6c7ae0"};
    font-size: 1.5em;
    margin: 0.5em 0;
    padding: 0.25em;
    border: 2px solid #6c7ae0;
    border-radius: 3px;
    transition: 0.5s;
    `;

export const Label = styled.label`
    display: inline-block;
    width: 100px;
    `;
