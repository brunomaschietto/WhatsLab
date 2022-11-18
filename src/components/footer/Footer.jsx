import { useState } from "react"
import { FooterMain } from "./footerStyled"
import mic from "../../assets/microphone.svg"
import smile from "../../assets/smiley.svg"
import paperclip from "../../assets/paperclip.svg"
import React from "react";

function Footer(props) {
    // aqui entra o react
    const [message, setMessage] = useState("")
    

    function onChangeInput(event) {
        setMessage(event.target.value)
    }



    function oneKeyDownInput(event) {
        if (event.key === "Enter") {
            const novaPessoaMensagem = {
                idDoAutor: Date.now(),
                nomeDoAutor: props.person,
                mensagemDoAutor: message,
                horario: new Date().toLocaleString('pt-BR', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                })
            }
            const novaMensagem = [...props.messages]
            novaMensagem.push(novaPessoaMensagem)
            props.setMessages(novaMensagem)
            setMessage("")
        }
    }


    return (
        <FooterMain>
            <div>
                <a href="#">
                    <img src={smile} alt="smile icon" />
                </a>

                <input
                    type={"text"}
                    value={message}
                    onChange={onChangeInput}
                    onKeyDown={oneKeyDownInput}
                />

                <a href="#">
                    <img src={paperclip} alt="paperclip icon" />
                </a>
            </div>
            <div>
                <a href="#">
                    <img src={mic} alt="microfone" />
                </a>
            </div>
        </FooterMain>
    )
}

export default Footer