export function meta() {
  return {
    title: "GuitarLA - Carrito de Compras",
  };
}

const Carrito = () => {
  return (
    <div className="container mx-auto my-16">
      <h1 className="text-6xl font-black text-center text-amber-500 my-20">
        Carrito de Compras
      </h1>

      <div className="grid md:grid-cols-5 gap-12 my-20">
        <div className="md:col-span-3 p-12 ">
          <h2 className="font-bold text-5xl">Articulos</h2>
        </div>

        <aside className="bg-gray-100 p-16 rounded md:col-start-4 md:col-span-2">
          <h3 className="font-bold text-4xl mb-6">Resumen del Pedido</h3>
          <p>Total a pagar: $</p>
        </aside>
      </div>
    </div>
  );
};

export default Carrito;
