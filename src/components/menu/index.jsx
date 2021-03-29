import React from "react"
import { Link } from "react-router-dom";
import "./menu.scss";





const Menu = () => {

    return (
        <div className="menu">
<div className="brand">HAriice
    </div>



    <div className="links">
{/* <a href="#"></a> */}
<Link to="/">Home</Link>

{/* <a href="#">Table</a> */}
<Link to="/table">Table</Link>

<Link to="/about">About</Link>
<Link to="/more">More..</Link>
<Link to="/catogery">Catogery</Link>
<Link to="/simple">simple</Link>

        </div>
 </div>   )
}
export default Menu;