import { Link } from "@remix-run/react";

const Guitarra = ({ guitarra }) => {
  const { descripcion, imagenMedium, precio, nombre, _id } = guitarra;
  return (
    <>
      {/* ----------------------Guitarra---------------------- */}
      <div className="grid grid-cols-5 gap-2 items-center">
        {/* ----------------------Contenido-Guitarra---------------------- */}
        <img
          className="col-span-2"
          src={imagenMedium}
          alt={`Imagen guitarra ${nombre}`}
        />
        <div className="col-span-3 p-4">
          <h3 className="text-5xl uppercase text-amber-500 font-bold mb-12">
            {nombre}
          </h3>
          <p className="line-clamp-6 text-3xl">{descripcion}</p>
          <p className="text-amber-500 text-7xl font-black my-10">${precio}</p>

          <Link
            className="block bg-black text-white text-center p-3 uppercase text-2xl font-bold hover:bg-amber-500 transition duration-300"
            to={`/guitarras/${_id}`}
          >
            Ver Producto
          </Link>
        </div>
      </div>
    </>
  );
};

export default Guitarra;
