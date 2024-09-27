import React from "react";
import LeafLeft from "../../../Leaf_Left.png";
import LeafRight from "../../../Leaf_Right.png";

const Leaf: React.FC = () => {
  return (
    <>
      <img
        src={LeafRight}
        alt="Leaf Right"
        style={{
          position: "fixed",
          right: 0,
          top: 20,
          width: "30%",
          height: "auto",
          transformOrigin: "center",
          animation: "sway 5s ease-in-out infinite",
          zIndex: -1,
        }}
      />
      <img
        src={LeafLeft}
        alt="Leaf Left"
        style={{
          position: "fixed",
          left: 0,
          top: 20,
          width: "30%",
          height: "auto",
          transformOrigin: "center",
          animation: "sway 5s ease-in-out infinite",
          zIndex: -1,
        }}
      />
    </>
  );
};

export default Leaf;
