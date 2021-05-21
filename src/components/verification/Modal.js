import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import parse from "html-react-parser";

function Modal({ active, header, content, btn, close }) {
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
        {btn && (
          <Link to="/verification/init">
            <button onClick={btn.callback}>{btn.title}</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Modal;
