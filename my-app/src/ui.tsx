import styled from 'styled-components'

interface InputProps {
    area?: string;
    content?: string;
    placeholder?: string;
}
interface ButtonProps {
  width?: string;
  content?: string;  
}
export const Label = styled.label<InputProps>`
display: grid;
padding:0;
margin:0;
overflow:hidden;  
box-sizing: border-box;
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
    color: black;
    box-sizing: border-box;
  }
:focus-within {
  ::after {
    visibility: visible;
  }
}  
// `
export const Input = styled.input<InputProps>`
  width: 35rem;
  height: 2rem;
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
  text-align: center;
  justify-content: space-around;
  
`
export const AuthWrapper = styled.div`
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
export const ConWrap = styled.div`
  max-height: 200px;
  width: 560px;
  justify-self: center;
  overflow-x: hidden;
`

export const Button = styled.button`
  border-style: none;
  outline: none;
  width: 50%;
  height: 30px;
  border-radius: 10px;
  background-color: lightgray;
  color: "black";
  :hover {
    opacity: 0.9;
  }
  :active {
    background-color: red;
  }
`
export const CCButton = styled(Button)<ButtonProps>`
  background-color: green;
  justify-self:center;
  color: white;
  width: ${props => props.width|| '35rem'};

`
export const ForwardButton = styled(Button)<ButtonProps>`
  background-color: yellow;
  justify-self:center;
  width: 30rem;
`

