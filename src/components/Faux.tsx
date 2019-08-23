import React from "react";

interface Props {
  rounded?: Boolean,
  depth?: Number,
  ml?: Number | "auto",
  mt?: Number,
  bg?: "gray" | "blue" | "red",
  class?: String | null,
  style?: Object | null
}

export default function Faux(props: Props) {
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
