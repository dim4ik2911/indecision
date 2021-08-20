import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    //on request close person can clisn esc button or on any place on the screen and the modal will close
    onRequestClose={props.handleClearSelectedOption}
  >
    <h3>Selected option</h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);
export default OptionModal;
