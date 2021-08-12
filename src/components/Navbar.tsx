import { useState } from "react";
import {
    Link
  } from "react-router-dom";

export const Navbar = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <a className="navbar-brand" href="/">
        <span className="">Inicio</span>
      </a>
      <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
        <Link className="nav-link active" to="/" aria-current="page">Inicio</Link>
        <Link to="/client" className="nav-link">Clientes</Link>
      </div>
    </nav>
  );
}
