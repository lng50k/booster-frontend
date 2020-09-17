import styled from "styled-components"

const Button = ({ text, type, active = true, onClick, id, domain, children }) => {

    const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.disabled ? "#fff" : "#6c7ae0"};
    color: ${props => props.disabled ? "#ccc" : "#fff"};
    
    font-size: 1.5em;
    border: 2px solid ${props => props.disabled ? "#ccc" : "#6c7ae0"};
    border-radius: 3px;
    transition: 0.7s;
    
    &:hover {
        cursor: ${props => props.disabled ? "none" : "pointer"};
        box-shadow: inset 8em 0 0 0 #fff;
        color: ${props => props.disabled ? "#ccc" : "#6c7ae0"};
    }
    `;

    return (
        <Button id={id} disabled={!active} type={type} data-domain={domain} onClick={ onClick }> { children } </Button>
    )
}
export default Button