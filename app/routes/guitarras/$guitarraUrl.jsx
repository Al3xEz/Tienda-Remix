import { useLoaderData } from "@remix-run/react";
import { useState } from "react";

export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);

  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  }
  return guitarra;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: `GuitarLA - 404`,
    };
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
  };
}

export async function getGuitarra(url) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const resultado = await respuesta.json();

  return resultado;
}

const Guitarra = () => {
  const [cantidad, setCantidad] = useState(0);
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cantidad === 0) {
      alert("Debe seleccionar una cantidad");
      return;
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };
  };

  return (
    <main className="container mx-auto grid grid-cols-5 gap-2 items-center max-w-5xl">
      <img
        className="col-span-2"
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />
      <div className="col-span-3 p-4">
        <h3 className="text-5xl uppercase text-amber-500 font-bold mb-12">
          {nombre}
        </h3>
        <p className="text-3xl">{descripcion}</p>
        <p className="text-amber-500 text-7xl font-black my-10">${precio}</p>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="text-4xl mb-5" htmlFor="cantidad">
            Cantidad
          </label>
          <select
            className="text-center p-4 border-2 border-solid rounded-xl border-black"
            name="cantidad"
            id="cantidad"
            onChange={(event) => {
              setCantidad(Number(event.target.value));
            }}
          >
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input
            className="mt-10 bg-black text-white uppercase p-5 cursor-pointer font-bold hover:bg-amber-500 transition duration-300"
            type="submit"
            value="Agregar al Carrito"
          />
        </form>
      </div>
    </main>
  );
};

export default Guitarra;
