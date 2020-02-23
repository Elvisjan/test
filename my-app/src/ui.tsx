import styled from 'styled-components'

interface InputProps {
    area?: string;
    content?: string;
    placeholder?: string;
}
export interface ButtonProps {
  width?: string;
  content?: string; 
  area?: string; 
}
export const Label = styled.label<InputProps>`
display: grid;
padding:0;
border: 5px dotted black;
min-height: 30px;
margin:0;
padding:0;
justify-self: start;
overflow:hidden; 
box-sizing: border-box;
grid-area: ${props=> props.area};
::after {
    content: '${props=>props.content}';
    background-color: lightgray;
    visibility: hidden;
    display: inline-block;
    border: 1px dotted black;
    position: relative;
    width: 100%;
    max-height: 50px;
    justify-self:center;
    align-self: start;
    top:-63%;
    margin: 0;
    color: black;
    box-sizing: border-box;
    pointer-events:none;
    opacity:0;
    transition: opacity 0.3s ease-in;
  }
:focus-within {
  ::after {
    opacity: 1;
    visibility: visible;
  }
}  
// `
export const Input = styled.input<InputProps>`
  width: 35rem;
  height: 2rem;
  padding:0;
  margin:0;
  background-color: lightgray;
  border-radius: 3px;
  border: none;
  color: black;
  text-align: center;
::placeholder {
    font-size: 17px;
    width: 100%;
    color: black;
  }

`
export const Section = styled.section`
  min-height: 100vh;
  background: linear-gradient(to right, #2c3e50, #4ca1af);
  display: grid;
  grid-template-columns: auto;
  grid-template-areas: 
  "b"
  "input1"
  "input2"
  "input3"
  "lorembtn"
  "cond"
  "cbtn"
  "fbt"
  "ccbt"
   ;
   text-align:center;
  justify-content: space-around;
  
`
export const AuthWrapper = styled.div<ButtonProps>`
  margin-top: 10px;
  display: grid;  
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
`
export const Text = styled.div`
  text-align: center;
  color: #fff;
  font-size: 36px;
`
export const ConWrap = styled.div<ButtonProps>`
  max-height: 200px;
  width: 560px;
  justify-self: center;
  overflow-x: hidden;
  grid-area: ${props=> props.area};
`

export const Button = styled.button<ButtonProps>`
  border-style: none;
  outline: none;
  width: 50%;
  height: 30px;
  border-radius: 10px;
  background-color: lightgray;
  color: "black";
  grid-area: ${props=> props.area};
  :hover {
    opacity: 0.9;
  }
  :active {
    background-color: red;
  }
`
export const ForwardButton = styled(Button)`
  background-color: green;
  justify-self:center;
  color: white;
  width: ${props => props.width|| '35rem'};
`
export const CCButton = styled(Button)`
  background-color: yellow;
  width: 30rem;
  justify-self:center;
`
export const Scb = styled(Button)`
  justify-self:center;
`
