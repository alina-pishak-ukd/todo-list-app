import React, { FC } from "react";

import clsx from "clsx";

import { ITitleProps } from "./Title.types";

export const Title: FC<ITitleProps> = ({ className, children }) => {
  return (
    <h1 className={clsx("text-4xl font-bold md:text-6xl", className)}>
      {children}
    </h1>
  );
};
