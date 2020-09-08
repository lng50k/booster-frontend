import styled from "styled-components"

const ActionButton = ({ text, type, active = true, onClick }) => {

    const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.disabled ? "#fff" : "#6c7ae0"};
    color: ${props => props.disabled ? "#ccc" : "#fff"};
    
    font-size: 1.5em;
    margin: 1em 0;
    padding: 0.25em 2em;
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
        <div style={{textAlign: 'right'}}>
            <Button disabled={!active} type={type} onClick={ onClick }> { text } </Button>
        </div>
    )
}
export default ActionButton