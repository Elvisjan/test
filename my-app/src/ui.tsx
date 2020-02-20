import styled from 'styled-components'

interface InputProps {
    area?: string;
    placeholder: string;
}
export const Input = styled.input<InputProps>`
  width: 35rem;
  height: 2rem;
  background-color: lightgray;
  border-radius: 3px;
  border: none;
  color: black;
  text-align: center;
  grid-area: ${props=> props.area || null};
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
export const CCButton = styled(Button)`
  background-color: green;
  justify-self:center;
  color: white;
  width: 30rem;

`
export const ForwardButton = styled(Button)`
  background-color: yellow;
  justify-self:center;
  width: 30rem;
`

