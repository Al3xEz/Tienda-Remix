import imagen from "../../public/img/nosotros.jpg";

export function meta() {
  return {
    title: "GuitarLA - Nosotros",
  };
}

export function links() {
  return [
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

const Nosotros = () => {
  return (
    /* ----------------------Nosotros---------------------- */
    <main className="container">
      {/* ----------------------Titulo-Nosotros---------------------- */}
      <h2 className="text-6xl font-black text-center text-amber-500 my-20">
        Nosotros
      </h2>

      {/* ------------Contenido-Nosotros------------ */}
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 items-center mx-6">
        {/* ------------Imagen-Nosotros------------ */}
        <img src={imagen} alt="Imagen Nosotros" />

        {/* ------------Texto-Nosotros------------ */}
        <div>
          <p>
            Morbi fermentum, purus ac laoreet congue, sem tellus aliquet libero,
            vel semper urna elit et metus. Sed nisl enim, varius quis lorem
            quis, convallis aliquam mi. Suspendisse vitae lacinia sapien, et
            scelerisque metus. Proin consectetur, tellus ut fermentum volutpat,
            libero ipsum posuere mi, nec condimentum mi erat eget nisi.
          </p>
          <p>
            Suspendisse potenti. Vivamus ornare interdum hendrerit. Integer a
            venenatis leo. Proin pharetra purus et semper pharetra. Vestibulum
            ut ex libero. Integer efficitur, est a fermentum porta, erat augue
            porttitor metus, in dignissim justo enim vel neque.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
