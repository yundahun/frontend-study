import styled from "styled-components";
import { FaRegWindowClose } from "react-icons/fa";


const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(5, 22, 127, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  font-family: "Dongle", sans-serif;
  font-size: 24px;
  color: white;
`;

const ModalContainer = styled.div`
  width: 25rem;
  height: 10rem;
  background: #4c5af4;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  overflow-y: auto;

  svg {
    cursor: pointer;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    font-family: "Dongle", sans-serif;
  }

  hr {
    margin: 0;
    border: 0.5px solid #ccc;
  }

  .body {
    padding: 1.25rem;
    font-style: 1rem;
    line-height: 1.125rem;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 20px;
  }
`;


function Modal(props) {
  const { title, children, onCloseModal, onEdit } = props;

  return (
    <Background>
      <ModalContainer>
        <div className="header">
          <span className="modal-title">{title}</span>
          <FaRegWindowClose onClick={onCloseModal} />
        </div>
        <hr />
        <div className="body">
          {children}
        </div>
        <div className="footer">
          <button type="button" onClick={onEdit}>수정하기</button>
        </div>
      </ModalContainer>
    </Background>
  );
};

export default Modal;