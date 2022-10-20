import { useLoaderData } from "@remix-run/react";
import Guitarra from "~/components/guitarra";

export function meta() {
  return {
    title: "GuitarLA - Tienda de Guitarras",
  };
}

export async function loader() {
  const url = `${process.env.API_URL}/guitarras?populate=imagen`;
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  return resultado.data;
}

const Tienda = () => {
  const guitarras = useLoaderData();
  console.log(guitarras);
  return (
    <main className="container mx-auto">
      <h2 className="text-6xl font-black text-center text-amber-500 my-20">
        Nuesta Coleccion
      </h2>
      {guitarras?.length && (
        <div className="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Tienda;
