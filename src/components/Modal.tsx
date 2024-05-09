import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

const SimpleModal = ({ children, show, setShow }) => {
  const content = show && (
    <div className="overlay">
      <div className="modal">
        <button
          className="modal-close"
          type="button"
          onClick={() => setShow(false)}
        >
          X
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )

  return content
}

export default SimpleModal