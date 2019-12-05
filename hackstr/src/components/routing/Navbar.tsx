import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import UserOptions from "./UserOptions";

export const Navbar: React.FC<any> = (props: any) => {
  // const username = 'user';
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  
 return (
    <div>
      {props.username ? (
        <button>Sign in</button>
      ) : (<UserOptions dropDownOpen={dropdownOpen} toggle={toggle}/> )}
        
    </div>
  );
};
