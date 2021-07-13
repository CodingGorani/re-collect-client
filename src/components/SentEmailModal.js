import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function SentEmailModal(props) {
  return (
    <div className="modal">
      <div className="modalWrapper">
        <div className="sentEmailModal">
          <div
            className="closeBtn"
            onClick={() => {
              props.setModalMode("");
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>

          <div className="logo"> Recollect </div>
          <p>
            인증번호가 전송되었습니다 <br /> 이메일을 확인해주세요
          </p>
          <div className="findPwdErrorMessage"></div>
          <button
            onClick={() => {
              props.setModalMode("");
            }}
          >
            확인
          </button>
          <div className="buttonContainer">
            <div
              onClick={() => {
                props.setModalMode("signup");
              }}
            >
              회원가입
            </div>
            <div
              onClick={() => {
                props.setModalMode("login");
              }}
            >
              로그인
            </div>
          </div>
          <div className="signUperrorMessage"> </div>
        </div>
      </div>
    </div>
  );
}

export default SentEmailModal;
