import { useLoaderData, useOutletContext } from "@remix-run/react";
import { useState } from "react";
import Alerta from "../../components/Alerta";

export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);

  if (Object.keys(guitarra) === 0) {
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
    title: `GuitarLA`,
  };
}

export async function getGuitarra(url) {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras/${url}`);
  const resultado = await respuesta.json();

  return resultado;
}

const Guitarra = () => {
  const { agregarCarrito } = useOutletContext();
  const [cantidad, setCantidad] = useState(0);
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio, _id } = guitarra;
  const [alerta, setAlerta] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cantidad === 0) {
      setAlerta({ msg: "Debe seleccionar una cantidad", error: true });
      return;
    }

    const guitarraSeleccionada = {
      id: _id,
      imagen,
      nombre,
      precio,
      cantidad,
    };
    setAlerta({ msg: "Se ha agregado al carrito", error: false });
    agregarCarrito(guitarraSeleccionada);
  };

  return (
    <main className="container mx-auto grid grid-cols-5 gap-2 items-center max-w-5xl">
      <img
        className="col-span-2"
        src={imagen}
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
            className="appearance-none text-center p-4 border-2 border-solid rounded-xl border-black"
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
          <div className="mt-6">{alerta.msg && <Alerta alert={alerta} />}</div>
        </form>
      </div>
    </main>
  );
};

export default Guitarra;
