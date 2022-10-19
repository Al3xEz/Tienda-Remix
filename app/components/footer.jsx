import { Link, useLocation } from "@remix-run/react";

const Footer = () => {
  const location = useLocation();
  return (
    <footer className=" bg-zinc-900 py-20 mt-20">
      {/* ----------------------Contenido Footer---------------------- */}
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        {/* ----------------------Navegacion---------------------- */}
        <nav className="text-white uppercase font-bold text-3xl flex flex-col items-center gap-8 mt-16 md:mt-0 md:flex-row ml-10">
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
        </nav>
        <p className="text-white mt-12 md:mt-0 text-center mr-10">
          Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
