import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }} onClick={onClose}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '5px'
      }} onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}

function PortalExample() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>
        Show Modal
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Modal Title</h2>
          <p>This is a modal using portals!</p>
        </Modal>
      )}
    </div>
  );
}
