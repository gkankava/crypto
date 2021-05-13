import React from "react";
import { FaCheckCircle, FaUserClock } from "react-icons/fa";
import { MdLockOpen } from "react-icons/md";

function VerificationCard({ header, content, moreInfo, status, setModal }) {
  return (
    <div className="verification-card">
      <div className="header">
        <h4>{header}</h4>
        <div className="icon">
          {status === "ok" ? (
            <FaCheckCircle color="rgb(87, 156, 87)" size={20} />
          ) : status === "pending" ? (
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  color: "#f3cb82",
                  marginRight: "5px",
                  fontSize: "16px",
                }}
              >
                pending
              </span>
              <FaUserClock color="#f3cb82" size={25} />
            </span>
          ) : (
            <MdLockOpen color="#525252" size={25} />
          )}
        </div>
      </div>
      <p className="content">{content}</p>
      <button
        className="more-btn"
        onClick={() =>
          setModal({
            active: true,
            header: header,
            content: moreInfo,
          })
        }
      >
        More info
      </button>
    </div>
  );
}

export default VerificationCard;
