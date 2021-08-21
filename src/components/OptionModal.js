import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    //on request close person can clisn esc button or on any place on the screen and the modal will close
    onRequestClose={props.handleClearSelectedOption}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected option</h3>
    <p className="modal__body">{props.selectedOption}</p>
    <button className="button" onClick={props.handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);
export default OptionModal;
