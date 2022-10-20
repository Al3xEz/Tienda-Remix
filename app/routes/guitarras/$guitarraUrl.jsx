import { useLoaderData } from "@remix-run/react";

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
  const guitarra = useLoaderData();

  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

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
      </div>
    </main>
  );
};

export default Guitarra;
