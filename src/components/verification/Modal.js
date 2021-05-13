import React from "react";
import {} from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import parse from "html-react-parser";

function Modal({ active, header, content, close }) {
  return (
    <div
      className="fs-modal"
      style={{ display: active ? "flex" : "none" }}
      onClick={() => close({ active: false })}
    >
      <div className="wrapper" onClick={(e) => e.stopPropagation()}>
        <AiOutlineClose
          className="close-ico"
          color="#aeb1b3"
          onClick={() => close({ active: false })}
        />
        <h3>{header}</h3>
        <p>{content && parse(content)}</p>
      </div>
    </div>
  );
}

export default Modal;
