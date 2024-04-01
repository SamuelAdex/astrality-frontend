"use client";

import React, { useEffect, useRef } from "react";

interface modalProps {
    children: any;
    style?: String;
    isOpen?: Boolean;
    onCloseModal?: any;
}

const Modal = ({ children, style, isOpen, onCloseModal }: modalProps) => {
  const modalRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = (e: any) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onCloseModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className={`${style} w-full fixed left-0 top-0 z-40 h-[100vh] bg-black bg-opacity-[60%] backdrop-blur-sm ${
            isOpen ? "grid" : "hidden"
          } place-items-center text-opacity-[100%]`}
        >
          <div
            className="grid place-items-center md:w-1/2 relative"
            ref={modalRef}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;