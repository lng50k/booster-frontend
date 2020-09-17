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
    `

export const Label = styled.label`
    display: inline-block;
    width: 100px;
    `


export const Title = styled.h1`
    color: #6c7ae0;  
    border-bottom: 4px solid #6c7ae0;
    width: fit-content;
    padding-right: 20px;
    margin-bottom: 50px;
  `
export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    filter: ${props => props.isLoading ? "blur(3px)" : "none"};
  `
  
export const Footer = styled.footer`
    padding: 20px 0;
    font-size: 20px;
    text-align: center;
  `
  
export const Sidebar = styled.div`
    display: inline-block;
    width: 20%;
    float: left;   
  `
  
export const ContainerBody = styled.div`
    display: inline-block;
    width: 80%;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 3px 3px 5px 1px #ccc;  
  `
  
export const NavMenu = styled.ul`
    list-style: none;
    font-size: 30px;
    padding: 0;
    margin: 0 20px 0 0;
    box-shadow: 3px 3px 5px 1px #ccc;  
  `
  
export const NavItem = styled.li`
    background: #6c7ae0;  
    border-bottom: 4px solid #fff;
    padding: 10px 10px 10px 20px;
    transition: 0.2s;
    color: #fff;
    &:hover {
      padding-left: 40px;
      background: #6c7ae0cc;
      cursor: pointer;
    }
  `
export const SuccessBox = styled.div`
    text-align: center;
    div {
      margin: 10px 0;
    }
    span, a {
      font-size: 1.2em;
      font-weight: bold;
    }
`
  
export const ModalBox = styled.div`
  text-align: center;
  width: 500px;
  padding: 40px;
  background: #6c7ae0;
  box-shadow: 0 20px 75px rgba(0, 0, 0, 0.23);
  color: #fff;
  button {
    width: 160px;
    padding: 10px;
    border: 1px solid #fff;
    margin: 10px;
    cursor: pointer;
    background: none;
    color: #fff;
    font-size: 14px;
    transition: 0.7s;
    &:hover {
      color: #6c7ae0;
      box-shadow: inset 12em 0 0 0 #fff;
    }
  }
`