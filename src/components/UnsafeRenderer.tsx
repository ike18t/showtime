import React from "react";

export const UnsafeRenderer = ({
  children,
}: {
  className?: string;
  children: string;
}) => <span dangerouslySetInnerHTML={{ __html: children }} />;
