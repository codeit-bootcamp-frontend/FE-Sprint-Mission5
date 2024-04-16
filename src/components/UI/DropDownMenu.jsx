import React from "react";
import "./DropdownMenu.css";

function DropdownMenu({ onSortSelection }) {
  return (
    <div className="dropdownMenu">
      <div className="dropdownItem" onClick={() => onSortSelection("recent")}>
        최신순
      </div>
      <div className="dropdownItem" onClick={() => onSortSelection("favorite")}>
        인기순
      </div>
    </div>
  );
}
export default DropdownMenu;
