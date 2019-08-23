import React from "react";

export default function Faux(props) {
  let { style, rounded = false, depth, ml = 3, mt = 0, bg = "gray" } = props;
  let radius = rounded ? "rounded-full" : "rounded";
  let _depth = depth ? depth : 800;

  return (
    <div
      className={`bg-${bg}-${_depth} ml-${ml}  mt-${mt} ${radius} ${
        props.class ? props.class : ""
      } `}
      style={{ ...{ height: "36px", width: "36px" }, ...style }}
    />
  );
}
