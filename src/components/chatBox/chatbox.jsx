import { MainChatBox, MensagemArrumada, Message } from "./chatBoxStyled";
import tickGreen from "../../assets/tick-green-double.svg";
import React from "react";

function ChatBox(props) {
  const MostraMensagem = props.messages.map((mensagem, index) => {
    function DeletaMensagem(idMensagem) {
      if (window.confirm("Deseja apagar a mensagem?")) {
        const apagaMensagem = props.messages.filter((mensagem) => {
          if (mensagem.idDoAutor !== idMensagem) {
            return mensagem;
          }
        });
        props.setMessages(apagaMensagem);
      }
    }
    return (
      <Message
        person={mensagem.nomeDoAutor}
        key={index}
        onDoubleClick={() => DeletaMensagem(mensagem.idDoAutor)}
      >
        <h1>{mensagem.nomeDoAutor}</h1>
        <MensagemArrumada>
          <p>{mensagem.mensagemDoAutor}</p>
          <div>
            <p>{mensagem.horario}</p>
            <img src={tickGreen} alt="Ticket" />
          </div>
        </MensagemArrumada>
      </Message>
    );
  });
  return <MainChatBox>{MostraMensagem}</MainChatBox>;
}

export default ChatBox;
