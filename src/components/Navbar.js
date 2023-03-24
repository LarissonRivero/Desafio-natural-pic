import React from "react";
import "../assets/CSS/style.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar fs-2 bg-success">
      <Link to="/"> Inicio </Link> || <Link to="/favoritos"> Favoritos </Link>
    </nav>
  );
}
