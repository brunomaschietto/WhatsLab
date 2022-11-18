import styled from "styled-components";
import fotozap from "../../assets/foto-de-fundo-zap.jpg";

export const MainChatBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px;
  background-image: url(${fotozap});
`;

export const Message = styled.div`
  background-color: ${(props) =>
    props.person === "Bruno" ? "#61c554" : "gray"};
  color: ${(props) => (props.person === "Bruno" ? "white" : "black")};
  margin-left: ${(props) => (props.person === "Bruno" ? "auto" : 0)};
  min-width: 200px;
  max-width: 300px;
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 16px;
  h1 {
    font-family: "DM sans", sans-serif;
    font-weight: 500;
    font-size: 16px;
    padding-bottom: 4px;
  }

  div {
    display: flex;
    justify-content: space-between;

    p {
      font-family: "DM sans", sans-serif;
      font-weight: 400;
      font-size: 16px;
      word-wrap: break-word;
    }

    div {
      font-weight: 500px;
      font-size: 8px;
      color: #727272;
      margin-left: auto;

      p {
        color: lightgray;
      }

      img {
        width: 16px;
        margin-left: 4px;
      }
    }
  }
`;

export const MensagemArrumada = styled.div`
  display: flex;
`;
