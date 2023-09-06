import React from "react";
import { DragPreviewImage, useDrag } from "react-dnd";

export default function Piece({ piece: { type, color }, position }) {
  const [{ isDragging }, drag, preview] = useDrag({
    type: "piece",
    item: { type, id: `${position}_${type}_${color}` },
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging() };
    },
  });

  const pieceImg = require(`./assets/${type}_${color}.png`);

  return (
    <>
      <DragPreviewImage connect={preview} src={pieceImg} />
      <div
        className="piece-container"
        ref={drag}
        style={{ opacity: isDragging ? 0 : 1 }}
      >
        <img className="piece" src={pieceImg} alt={`${type}_${color}`} />
      </div>
    </>
  );
}
