import React from "react";
import { DrawerWrapper } from "./styled";

function Drawer() {
  return (
    <DrawerWrapper>
      <div></div>
      <hr></hr>
      <ul>
        <button>Pantry</button>
        <button>Obsolete</button>
        <button>Blender</button>
        <button>Lightning Deals</button>
      </ul>
    </DrawerWrapper>
  );
}

export default Drawer;
