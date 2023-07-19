import { Component } from "react";
import "./Navbar.css";
import { menuItems } from "./MenuItems";
import {Link} from "react-router-dom"
class Navbar extends Component{
  state={clicked:false};
  handleClick=() =>{
    this.setState({clicked:!this.state.clicked})
  }
    render(){
        return(
            <nav class="NavbarItems">
              <h1 className="navbar-logo">Travelbuddy</h1>
              <div className="menu-icons" onClick={this.handleClick}>
                <i className={this.state.clicked? "fas fa-times":"fas fa-bars"}></i>
              </div>
              <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>
                {menuItems.map((item,index) =>{
                  return(
                    <li key={index}>
                    <Link className={item.cName} to={item.url}><i className={item.icon}></i>
                    {item.title}</Link>
                </li>
                  );
                })}
                <button>Sign Up</button>
              </ul>
            </nav>
        );
    }
}
export default Navbar;