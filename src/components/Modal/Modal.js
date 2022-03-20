import React from 'react'

//Icons
import { FaWindowClose } from "react-icons/fa";

//Styles
import './Modal.css'

function Modal({children, state, changeState}) {
  return (
    <>
    { state &&
      <div className="user-container-modal-user__options">
          {/* <img src={props.picture} alt={props.username} className="modal-user-options__picture" /> */}
          <FaWindowClose className="close-modal-icon" onClick={() => changeState(false)}/>
          {children}
      </div>
    }
    </>
  )
}

export default Modal