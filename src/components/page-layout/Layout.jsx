import React from "react";
import "./layout.css";

export const Content = ({children}) => {
  return (
    <div className="page-content">
      {children}
    </div>
  )
}