import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Navbar
} from "reactstrap";
import UserOptions from "./UserOptions";
import { Link } from "react-router-dom";

export const CouchNav: React.FC<any> = (props: any) => {
  // const username = 'user';
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  
 return (
    <div>
      <Link to=''><img style={props.iconStyle} /></Link>
        <Navbar color={props.color}>
      {props.username ? (
        <button>Sign in</button>
      ) : (<UserOptions dropDownOpen={dropdownOpen} toggle={toggle}/> )}

    </Navbar>    
    </div>

  );
};
