import { Link, useLocation } from "@remix-run/react";

const Navegacion = () => {
  const location = useLocation();

  return (
    <>
      {/* ----------------------Navegacion---------------------- */}
      <nav className="text-white uppercase font-black text-3xl flex gap-8 mt-16 md:mt-0 mx-20 md:mx-8">
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
    </>
  );
};

export default Navegacion;
