import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const ModalContext = () => {
  return <Modal />;
};

export default ModalContext;
