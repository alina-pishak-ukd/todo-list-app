import React, { FC } from "react";

import { X } from "lucide-react";

import { IModalProps } from "./Modal.types";

export const Modal: FC<IModalProps> = ({ children, title, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full relative">
        <button
          onClick={onClose}
          aria-label="close modal"
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X />
        </button>

        <h2 className="text-2xl font-bold text-slate-600 mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};
