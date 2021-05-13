import React, { useState, useEffect } from "react";
import VerificationCard from "../components/verification/VerificationCard";

import { content } from "../components/verification/content";
import Modal from "../components/verification/Modal";

function Verification() {
  const [modalStatus, setModalStatus] = useState({
    active: false,
    header: null,
    content: null,
  });

  return (
    <section id="verification" className="container">
      <h1>Verification</h1>
      <div className="wrapper">
        <VerificationCard
          header={content.starter.header}
          status={"ok"}
          content={content.starter.content}
          moreInfo={content.starter.moreInfo}
          setModal={setModalStatus}
        />
        <VerificationCard
          header={content.intermediate.header}
          status={"pending"}
          content={content.intermediate.content}
          moreInfo={content.intermediate.moreInfo}
          setModal={setModalStatus}
        />
        <VerificationCard
          header={content.advanced.header}
          content={content.advanced.content}
          moreInfo={content.advanced.moreInfo}
          setModal={setModalStatus}
        />
      </div>
      <Modal
        active={modalStatus.active}
        header={modalStatus.header}
        content={modalStatus.content}
        close={setModalStatus}
      />
    </section>
  );
}

export default Verification;
