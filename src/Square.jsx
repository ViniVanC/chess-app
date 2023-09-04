import React from "react";

export default function Square({ children, black }) {
  return (
    <div className={`board-square ${black ? "square-black" : "square-white"}`}>
      {children}
    </div>
  );
}
