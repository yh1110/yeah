import React from "react";

type PostOptionBase = {
  children: React.ReactNode;
};

export const PostOptionBase: React.FC<PostOptionBase> = ({ children }) => {
  return (
    <button className="p-2 text-text-300 hover:text-secondary-300 rounded-full ">{children}</button>
  );
};
