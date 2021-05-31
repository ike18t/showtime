import React from "react";

export const UnsafeRenderer = ({
  children,
}: {
  classNames?: string;
  children: string;
}) => <span dangerouslySetInnerHTML={{ __html: children.toString() }} />;
