import React from "react";
import Faux from "./Faux";
import Logo from "./Logo";

import { useAppState } from "./AppState";
import useScrollDirection from "./useScrollDirection";

export default function Header() {
  let { state } = useAppState();
  let { isDown } = useScrollDirection();
  let { isFullscreen } = state;

  let cls = "show";

  if (isFullscreen && isDown) {
    cls = "fixed show";
  } else if (isFullscreen) {
    cls = "fixed hide";
  }

  return (
    <header className={`Header bg-gray-900 w-full flex px-10 py-3 shadow ${cls}`}>
      <Faux />
      <Logo />
      <Faux ml={48} style={{ width: "500px" }} />

      <Faux rounded ml="auto" />
      <Faux rounded />
      <Faux rounded />
      <Faux rounded />
    </header>
  );
}
