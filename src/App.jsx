import React from "react";
import { Main } from "./style";
import ChatBox from "./components/chatBox/chatbox";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import {useState} from 'react';

// Componentes são selfClose , as tags de html , dependendo , não são.
function App() {
  const [messages, setMessages] = useState([])
  const [person, setPerson] = useState('Bruno')
  return (
    <Main>
      <Header person={person} setPerson={setPerson}/>
      <ChatBox 
      person={person}
      messages={messages}
      setMessages={setMessages} 
      />
      <Footer 
      person={person}
      messages={messages}
      setMessages={setMessages} 
      />
    </Main>
  );
}

export default App;
