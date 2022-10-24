import { useState, useEffect } from "react";
import { useOutletContext } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
export function meta() {
  return {
    title: "GuitarLA - Carrito de Compras",
  };
}

const Carrito = () => {
  const [total, setTotal] = useState(0);
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext();

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <ClientOnly fallback={"cargando..."}>
      {() => (
        <div className="container mx-auto my-16">
          <h1 className="text-6xl font-black text-center text-amber-500 my-20">
            Carrito de Compras
          </h1>

          <div className="grid md:grid-cols-5 gap-12 my-20 items-start">
            <div className="md:col-span-3 p-12 ">
              <h2 className="font-bold text-5xl">Articulos</h2>

              {carrito?.length === 0 ? (
                <p className="mt-6">Carrito Vacio</p>
              ) : (
                carrito?.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-4 gap-16 items-center p-5 border-b-2 border-gray-300 last-of-type:border-none my-8 relative"
                  >
                    <div>
                      <img
                        src={item.imagen}
                        alt={`Imagen Guitarra ${item.nombre}`}
                      />
                    </div>

                    <div className=" col-start-2 col-span-3">
                      <p className="font-bold text-6xl my-6">{item.nombre}</p>
                      <p className="text-[25px] mb-2">Cantidad:</p>
                      <select
                        className="appearance-none border-2 border-gray-300 text-center w-full p-2 rounded-xl mb-8"
                        value={item.cantidad}
                        name="cantidad"
                        id="cantidad"
                        onChange={(event) => {
                          actualizarCantidad({
                            cantidad: Number(event.target.value),
                            id: item.id,
                          });
                        }}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>

                      <p className="font-black text-5xl text-amber-500 text-[30px]">
                        ${item.precio}
                      </p>
                      <p className="text-5xl my-6">
                        SubTotal: $
                        <span className="font-black text-5xl">
                          {item.precio * item.cantidad}
                        </span>
                      </p>
                    </div>
                    <button
                      className="hover:cursor-pointer absolute top-7 right-3"
                      type="button"
                      onClick={() => eliminarGuitarra(item.id)}
                    >
                      X
                    </button>
                  </div>
                ))
              )}
            </div>

            <aside className="bg-gray-100 p-16 rounded md:col-start-4 md:col-span-2 sticky top-8">
              <h3 className="font-bold text-4xl mb-6">Resumen del Pedido</h3>
              <p>Total a pagar: $ {total}</p>
            </aside>
          </div>
        </div>
      )}
    </ClientOnly>
  );
};

export default Carrito;
