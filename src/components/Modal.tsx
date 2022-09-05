import React, { useEffect, useImperativeHandle, useRef } from "react";
import "../App.css";
export interface modalFunction {
  focusClose: () => void;
  focusDeny: () => void;
  focusConfirm: () => void;
}

function Modal({ isOpen, onClose }: any, ref: any) {
  const closeRef = useRef<HTMLButtonElement>(null!);
  const confirmRef = useRef<HTMLButtonElement>(null!);
  const denyRef = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    if (closeRef == null) return;
    if (confirmRef == null) return;
    if (denyRef == null) return;
  }, []);

  useImperativeHandle(ref, () => {
    return {
      focusClose: () => closeRef.current.focus(),
      focusDeny: () => denyRef.current.focus(),
      focusConfirm: () => confirmRef.current.focus(),
    };
  });

  if (!isOpen) {
    return null;
  }
  return (
    <div
      style={{
        margin: "50px 20px 0",
        border: "solid 1px black",
        padding: "20px",
        position: "relative",
      }}
    >
      <div className="modal" ref={ref}>
        <button className="close" ref={closeRef} onClick={onClose}>
          &times;
        </button>
      </div>

      <div className="modal-header">
        <h1>Title</h1>
      </div>

      <div className="modal-body">Do You confirm</div>
      <div className="modal-footer">
        <button className="confirm-btn" ref={confirmRef} onClick={onClose}>
          Yes
        </button>

        <button className="deny-btn" ref={denyRef} onClick={onClose}>
          No
        </button>
      </div>
    </div>
  );
}

export default React.forwardRef(Modal);
