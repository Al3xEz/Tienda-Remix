import { Link } from "@remix-run/react";
import logo from "../../public/img/logo.svg";
import Navegacion from "./navegacion";

const Header = () => {
  return (
    /* ----------------------Header---------------------- */
    <header className="header bg-cover bg-no-repeat py-24 bg-center">
      {/* ----------------------Contenido-Header---------------------- */}
      <div className="flex flex-col items-center md:flex-row md:justify-between container mx-auto">
        {/* ----------------------Logo---------------------- */}
        <Link to="/">
          <img className="w-full" src={logo} alt="Imagen logo" />
        </Link>

        {/* ----------------------Navegacion---------------------- */}
        <Navegacion />
      </div>
    </header>
  );
};

export default Header;
