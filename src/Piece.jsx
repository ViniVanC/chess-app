import React from "react";

export default function Piece({ piece: { type, color } }) {
  const pieceImg = require(`./assets/${type}_${color}.png`);

  return (
    <div className="piece-container">
      <img className="piece" src={pieceImg} alt={`${type}_${color}`} />
    </div>
  );
}
