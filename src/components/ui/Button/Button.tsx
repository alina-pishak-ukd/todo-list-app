import React, { FC } from "react";

import clsx from "clsx";

import { IButtonProps } from "./Button.types";

export const Button: FC<IButtonProps> = ({
  children,
  type = "button",
  onClick,
  disabled,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "bg-slate-400 text-white py-2 px-4 rounded-lg transition-colors hover:bg-slate-500 disabled:bg-slate-200",
        className
      )}
    >
      {children}
    </button>
  );
};
