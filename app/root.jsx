import { useState, useEffect } from "react";
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link,
} from "@remix-run/react";
import styles from "~/styles/app.css";
import Header from "~/components/header";
import Footer from "~/components/footer";

//------------------------------------------Head------------------------------------------
export function meta() {
  return {
    charset: "utf-8",
    title: "GuitarLA - Remix",
    viewport: "width=device-width,initial-scale=1",
  };
}

export function links() {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
      rel: "stylesheet",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "icon",
      href: "/icono.svg",
    },
  ];
}

//------------------------------------------App------------------------------------------
export default function App() {
  const carritoLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : null;
  const [carrito, setCarrito] = useState(carritoLS);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (guitarra) => {
    if (carrito.some((item) => guitarra.id === item.id)) {
      const carritoActualizado = carrito.map((item) => {
        return item.id === guitarra.id ? guitarra : item;
      });
      setCarrito(carritoActualizado);
      return;
    }
    setCarrito([...carrito, guitarra]);
  };

  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((item) => {
      if (item.id === guitarra.id) {
        item.cantidad = guitarra.cantidad;
      }
      return item;
    });
    setCarrito(carritoActualizado);
  };

  const eliminarGuitarra = (id) => {
    const carritoActualizado = carrito.filter((item) => item.id !== id);
    setCarrito(carritoActualizado);
  };

  return (
    <Document>
      <Outlet
        context={{
          agregarCarrito,
          carrito,
          actualizarCantidad,
          eliminarGuitarra,
        }}
      />
    </Document>
  );
}

//------------------------------------------Document------------------------------------------
function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="relative min-h-screen pb-[380px] md:pb-52">
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

//------------------------------------------MANEJO DE ERRORES------------------------------------------
export function CatchBoundary() {
  const error = useCatch();
  return (
    <Document>
      <p className="text-center mt-32 text-red-600 font-bold text-4xl">
        {error.status} {error.statusText}
      </p>
      <Link
        className="block w-max mx-auto hover:text-amber-500 transition duration-300 my-20 font-bold text-4xl"
        to="/"
      >
        Volver a la pagina principal
      </Link>
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <p className="text-center mt-32 text-red-600 font-bold text-4xl">
        {error.status} {error.statusText}
      </p>
      <Link
        className="block w-max mx-auto hover:text-amber-500 transition duration-300 my-20 font-bold text-4xl"
        to="/"
      >
        Volver a la pagina principal
      </Link>
    </Document>
  );
}
