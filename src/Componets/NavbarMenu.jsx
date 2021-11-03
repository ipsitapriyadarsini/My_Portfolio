import React from "react";
import "../Sass/Navbar.scss";
import logo from "./logo.png";

const NavbarMenu = () => {
  return (
    <>
      <header>
        <div class="main-header">
          <section className="image_content">
            <img src={logo} alt="Ipsita" />
          </section>
          <ul className="contact_items">
            <li>01.CALL: +91-764770967</li>
            <li>02.Write: ipsitacet@gmail.com</li>
          </ul>
          <section className="menu_container">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </section>
        </div>
        <div className="submain_header">Protfolio</div>
      </header>
    </>
  );
};

export default NavbarMenu;
