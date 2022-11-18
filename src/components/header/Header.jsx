import phone from "../../assets/phone.svg"
import camera from "../../assets/video-cam.svg"
import hamburguer from "../../assets/hamburger.svg"
import { MainHeader, MainPerson , Icons} from "./headerStyled"
import React from "react";
import fotoMinha from '../../assets/foto-minha.jpg'

function Header(props) {
  
  function onChangePerson(event) {
    props.setPerson(event.target.value)
  }
  return (
    <MainHeader>

      <MainPerson>
        <img src={fotoMinha} alt="imagem perfil" />
        <div>
          <select value={props.person} onChange={onChangePerson}>
            <option value='Bruno'>Bruno</option>
            <option value='Maria'>Maria</option>
            <option value='José'>Jose</option>
            <option value='Rafael'>Rafael</option>
            <option value='Rodolfo'>Rodolfo</option>
          </select>
        </div>
      </MainPerson>

      <Icons>
        <a><img src={phone} alt="phon" /></a>
        <a><img src={camera} alt="camera" /></a>
        <a><img src={hamburguer} alt="hamburguer" /></a>
      </Icons>

    </MainHeader>
  )
}

export default Header