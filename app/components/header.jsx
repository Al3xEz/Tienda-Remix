import { Link, useLocation } from "@remix-run/react";
import logo from "../../public/img/logo.svg";
import carritoImg from "../../public/img/carrito.png";

const Header = () => {
  const location = useLocation();
  return (
    /* ----------------------Header---------------------- */
    <header className="header bg-cover bg-no-repeat py-24 bg-center">
      {/* ----------------------Contenido-Header---------------------- */}
      <div className="flex flex-col items-center md:flex-row md:justify-between container mx-auto">
        {/* ----------------------Logo---------------------- */}
        <Link className="mx-10 md:mr-0" to="/">
          <img className="w-full" src={logo} alt="Imagen logo" />
        </Link>

        {/* ----------------------Navegacion---------------------- */}
        <nav className="text-white uppercase font-black flex gap-4 text-2xl md:text-3xl mx-10 md:ml-0 mt-16 md:mt-0 ">
          {/* -----------Index----------- */}
          <Link
            className={
              location.pathname === "/"
                ? "text-amber-500 p-1.5"
                : "hover:text-amber-500 p-1.5 transition duration-500"
            }
            to="/"
          >
            Inicio
          </Link>

          {/* -----------Nosotros----------- */}
          <Link
            className={
              location.pathname === "/nosotros"
                ? "text-amber-500 p-1.5"
                : "hover:text-amber-500 p-1.5 transition duration-500"
            }
            to="/nosotros"
          >
            Nosotros
          </Link>

          {/* -----------Tienda----------- */}
          <Link
            className={
              location.pathname === "/tienda"
                ? "text-amber-500 p-1.5"
                : "hover:text-amber-500 p-1.5 transition duration-500"
            }
            to="/tienda"
          >
            Tienda
          </Link>

          {/* -----------Blog----------- */}
          <Link
            className={
              location.pathname === "/blog"
                ? "text-amber-500 p-1.5"
                : "hover:text-amber-500 p-1.5 transition duration-500"
            }
            to="/blog"
          >
            Blog
          </Link>

          <Link to="/carrito">
            <img className="w-16" src={carritoImg} alt="logo carrito" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
