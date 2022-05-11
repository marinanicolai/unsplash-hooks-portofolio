import React, { useContext, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Modal from "react-modal";
import { StorageContext } from "../../providers";
import { Image } from "./ImageItem.styles";
import { ModalHeader } from "../Modal/ModalHeader/index";
import { ModalFooter } from "../Modal/ModalFooter/index";
import { ModalContext } from "../Modal/ModalContext/index";

Modal.setAppElement("#root");

const Item = ({ item }) => {
  const { favorites, onFav, onUnFav } = useContext(StorageContext);
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const isCurrentImageSaved =
    favorites && favorites?.find((image) => image.id === item.id);

  return (
    <div>
      {/* <Modal isOpen={isOpen} onRequestClose={toggleModal}> */}
      <img
        src={item.urls["small"]}
        alt="sample"
        className="img-responsive w-100"
        onClick={toggleModal}
      />

      <Modal isOpen={isOpen} onRequestClose={toggleModal}>
        <ModalHeader />
        <button onClick={toggleModal}>Close modal</button>
        <Image
          src={item.urls["small"]}
          alt="sample"
          className="img-responsive w-100"
        />
        {isCurrentImageSaved ? (
          <FaRegStar onClick={() => onUnFav?.(item)} />
        ) : (
          <FaStar onClick={() => onFav(item)} />
        )}
        <ModalFooter />
      </Modal>
    </div>
  );
};

export default Item;
