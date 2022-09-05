import React, { useState, useRef, useEffect, useImperativeHandle } from "react";
import Article from "../components/Article";
import Modal, { modalFunction } from "../components/Modal";
export default function UseImperativeHandle() {
  const [open, setOpen] = useState<boolean>(false);
  const modalRef = useRef<modalFunction>(null!);

  useEffect(() => {
    if (modalRef == null) return;
    if (open) {
      document.body.style.filter = "blur(8px);";
    }

    if (!open) {
      document.body.style.background = "hsl(0, 0%, 10%)";
    }
  });

  const background = () => {
    modalRef.current.focusClose();
    setOpen(false);
  };
  return (
    <Article title="useImperativeHandle ❗">
      <p>
        Usually when you use useRef you are given the instance value of the
        component the ref is attached to. This allows you to interact with the
        DOM element directly.
      </p>

      <p>useImperativeHandle is very similar, but it lets you do two things:</p>

      <p>
        1. It gives you control over the value that is returned. Instead of
        returning the instance element, you explicitly state what the return
        value will be
      </p>

      <p>
        It allows you to replace native functions (such as blur, focus, etc)
        with functions of your own, thus allowing side-effects to the normal
        behavior, or a different behavior altogether. Though, you can call the
        function whatever you like.
      </p>

      <p>Common Use case </p>
      <p>
        When you need to access multiple elements inside a custom componenet
        outside of that component where props dont make sense(aka focus
        etc...because the browser already has a focus function){" "}
      </p>

      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => modalRef.current.focusClose()}>Focus Close</button>
      <button onClick={() => modalRef.current.focusConfirm()}>
        Focus Confirm
      </button>
      <button onClick={() => modalRef.current.focusDeny()}>Focus Deny</button>

      <Modal ref={modalRef} isOpen={open} onClose={() => setOpen(false)} />
    </Article>
  );
}
