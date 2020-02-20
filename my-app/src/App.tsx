import React from 'react';
import { Input, Button, CCButton, ForwardButton, Section, AuthWrapper} from './ui';
function App() {
  return (
    <>
     <Section>
       <AuthWrapper>
         <Button>ГосУслуги</Button>
         <Button>ДБО</Button>
       </AuthWrapper>
      <Input placeholder="blabla"></Input>
      <Input placeholder='2'></Input>
      <Input placeholder='3'></Input>
      <Input placeholder='4'></Input>
      <Input placeholder='5'></Input>
      <CCButton>Вперёд</CCButton>
      <ForwardButton>Не хочу ничего заполнять. Перезвоните мне</ForwardButton>
      </Section>
    </>
    )
}

export default App; 

